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
import {
  FINDER_REQUESTS_INTERVAL,
  FINDER_PLACEHOLDER,
  FINDER_ERROR_NAME_LENGTH_TOO_FEW,
} from '../../const';

interface Props {
  onCompleted?: (data: Characters_characters | null) => void;
  onError?: (error: Error) => void;
  onLoading?: Function;
}
interface ReducerState {
  name: string;
  page: number;
  excludedItems?: Characters_characters_results[];
  timer: number | null;
  waitForQuery: boolean;
}
interface ReducerAction {
  type: string;
  payload?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
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
  } = props;
  const [doQuery, { loading }] = useLazyQuery<Characters, CharactersVariables>(CHARACTERS, {
    onCompleted: data => onCompleted && onCompleted(data.characters),
    onError,
    partialRefetch: true,
  });
  const [state, dispatch] = useReducer((prevState: ReducerState, action: ReducerAction) => {
    switch (action.type) {
      case 'UPDATE_NAME':
        return { ...prevState, name: action.payload };
      case 'REFRESH_TIMER':
        return { ...prevState, timer: setTimeout(() => onTimerEnd(), FINDER_REQUESTS_INTERVAL) };
      case 'CLEAR_TIMER':
        prevState.timer && clearTimeout(prevState.timer);

        return { ...prevState, timer: null };
      case 'WAIT_FOR_QUERY':
        return { ...prevState, waitForQuery: true };
      case 'DONT_WAIT_FOR_QUERY':
        return { ...prevState, waitForQuery: false };
      default:
        return { ...prevState };
    }
  }, {
    name: '',
    page: 1,
    timer: null,
    waitForQuery: false,
  });
  const onTimerEnd = () => {
    dispatch({ type: 'CLEAR_TIMER' });
  };
  const onChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (event) => {
    const { value } = event.currentTarget;

    dispatch({ type: 'UPDATE_NAME', payload: value });
  };

  useEffect(() => {
    if (state.name && state.name.length > 1) {
      dispatch({ type: 'WAIT_FOR_QUERY' });
    } else {
      dispatch({ type: 'DONT_WAIT_FOR_QUERY' });
      onError && onError(new Error(FINDER_ERROR_NAME_LENGTH_TOO_FEW));
    }
  }, [onError, state.name]);
  useEffect(() => {
    if (onLoading && loading) {
      onLoading();
    }
  }, [onLoading, loading]);
  useEffect(() => {
    if (state.waitForQuery && !state.timer) {
      doQuery({
        variables: {
          page: state.page,
          filter: { name: state.name },
        },
      });
      dispatch({ type: 'DONT_WAIT_FOR_QUERY' });
      dispatch({ type: 'REFRESH_TIMER' });
    }
  });

  return (
    <StyledInput
      onChange={onChange}
      placeholder={FINDER_PLACEHOLDER}
    />
  );
};
