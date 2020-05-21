import React, { useReducer, useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import { CHARACTERS } from '../../gql-operations/queries';
import {
  Characters,
  CharactersVariables,
  Characters_characters,
  Characters_characters_results,
} from '../../gql-operations/types/Characters';
import { FINDER_PLACEHOLDER, FINDER_ERROR_NAME_LENGTH_TOO_FEW } from '../../const';

interface Props {
  onCompleted?: (data: Characters_characters | null) => void;
  onError?: (error: Error) => void;
  onLoading?: Function;
  page?: number;
}
interface ReducerState {
  name: string;
  excludedItems?: Characters_characters_results[];
}
interface ReducerAction {
  type: string;
  payload: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const StyledInput = styled.input`
  border: 1px solid #A0A0A0;
  text-transform: uppercase;
  font: inherit;
  width: 750px;
  padding: 0.7rem 0.9rem;

  @media (max-width: 820px) {
    width: 85%;
  }
`;

export default (props: Props): JSX.Element => {
  const {
    onCompleted,
    onError,
    onLoading,
    page = 1,
  } = props;
  const [doQuery, { loading }] = useLazyQuery<Characters, CharactersVariables>(CHARACTERS, {
    onCompleted: data => onCompleted && onCompleted(data.characters),
    onError,
  });
  const [state, dispatch] = useReducer((prevState: ReducerState, action: ReducerAction) => {
    switch (action.type) {
      case 'UPDATE_NAME':
        return {
          ...prevState,
          name: action.payload,
        };
      default:
        return { ...prevState };
    }
  }, {
    name: '',
  });
  const onChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (event) => {
    const { value } = event.currentTarget;

    dispatch({ type: 'UPDATE_NAME', payload: value });
  };

  useEffect(() => {
    if (state.name && state.name.length > 1) {
      doQuery({
        variables: {
          page,
          filter: { name: state.name },
        },
      });
    } else {
      onError && onError(new Error(FINDER_ERROR_NAME_LENGTH_TOO_FEW));
    }
  }, [doQuery, onError, page, state.name]);
  useEffect(() => {
    if (onLoading && loading) {
      onLoading();
    }
  }, [onLoading, loading]);

  return (
    <StyledInput
      onChange={onChange}
      placeholder={FINDER_PLACEHOLDER}
    />
  );
};
