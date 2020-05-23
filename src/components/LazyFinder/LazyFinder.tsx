import React, {
  useEffect,
  useState,
  useContext,
} from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import { StoreContext as FinderStoreContext, actionTypes } from '../../store/finder';
import {
  FINDER_REQUESTS_INTERVAL,
  FINDER_MIN_NAME_LENGTH,
  FINDER_PLACEHOLDER,
  FINDER_ERROR_NAME_LENGTH_TOO_FEW,
} from '../../const';

interface Props {
  dataType: DataType;
  query: GlobalDocumentNode;
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
const {
  UPDATE_NAME,
  WRITE_RESULTS_BY_PAGE,
  SET_ERROR,
  STOP_LOADING,
} = actionTypes;

export default ({ dataType, query }: Props): JSX.Element => {
  const { state, dispatch } = useContext(FinderStoreContext);
  const [doQuery, { data }] = useLazyQuery<QueryData, QueryVariables>(query, {
    partialRefetch: true,
    onError: (error) => {
      dispatch({ type: SET_ERROR, payload: error.message || 'Error' });
    },
  });
  const [nameTyped, setNameTyped] = useState('');
  const [timer, setTimer] = useState<number | null>(null);

  useEffect(() => {
    if (nameTyped && nameTyped.length > FINDER_MIN_NAME_LENGTH) {
      if (!timer && nameTyped !== state.name) {
        dispatch({ type: UPDATE_NAME, payload: nameTyped });
        setTimer(setTimeout(() => {
          timer && clearTimeout(timer);
          setTimer(null);
        }, FINDER_REQUESTS_INTERVAL));
      }
    } else {
      dispatch({ type: SET_ERROR, payload: FINDER_ERROR_NAME_LENGTH_TOO_FEW });
    }
  }, [timer, nameTyped, state.name, dispatch]);
  useEffect(() => {
    if (state.name) {
      doQuery({
        variables: {
          page: 1,
          filter: { name: state.name },
        },
      });
    }
  }, [state.name, dispatch, doQuery]);
  useEffect(() => {
    if (!state.error) {
      if (data) {
        const { info, results } = data[dataType] || {};
        const { pages, prev } = info || {};
        const currentPage = 1 + (prev || 0);

        if (pages && results && state.resultsByPages.length !== currentPage) {
          dispatch({ type: WRITE_RESULTS_BY_PAGE, payload: { currentPage, results } });
          if (currentPage < pages) {
            doQuery({
              variables: {
                page: currentPage + 1,
                filter: { name: state.name },
              },
            });
          } else {
            dispatch({ type: STOP_LOADING });
          }
        }
      }
    }
  }, [data, dataType, state.name, state.resultsByPages, state.error, dispatch, doQuery]);

  return (
    <StyledInput
      onChange={(event): void => {
        setNameTyped(event.currentTarget.value);
      }}
      placeholder={FINDER_PLACEHOLDER}
    />
  );
};
