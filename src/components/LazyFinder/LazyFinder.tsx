import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import { actionTypes } from '../../store/finder';
import useFinderReducer from './use-finder-reducer';
import {
  FINDER_REQUESTS_INTERVAL,
  FINDER_MIN_NAME_LENGTH,
  FINDER_PLACEHOLDER,
  FINDER_ERROR_NAME_LENGTH_TOO_FEW,
} from '../../const';

interface Props {
  onCompleted?: (resultsByPages: Item[][]) => void;
  onError?: (error: Error) => void;
  onLoading?: Function;
  excludedItems: Item[];
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
  UPDATE_EXCLUDED_ITEMS,
  WRITE_RESULTS_BY_PAGE,
} = actionTypes;

export default (props: Props): JSX.Element => {
  const {
    excludedItems = [],
    onCompleted,
    onError,
    onLoading,
    dataType,
    query,
  } = props;
  const [doQuery, { loading, data }] = useLazyQuery<QueryData, QueryVariables>(query, {
    onError,
    partialRefetch: true,
  });
  const [wait, setWait] = useState<boolean>(false);
  const [timer, setTimer] = useState<number | null>(null);
  const [state, dispatch] = useFinderReducer();

  useEffect(() => {
    dispatch({ type: UPDATE_EXCLUDED_ITEMS, payload: excludedItems });
  }, [dispatch, excludedItems]);
  useEffect(() => {
    if (state.name && state.name.length > FINDER_MIN_NAME_LENGTH) {
      setWait(true);
    } else {
      setWait(false);
      onError && onError(new Error(FINDER_ERROR_NAME_LENGTH_TOO_FEW));
    }
  }, [dispatch, onError, state.name]);
  useEffect(() => {
    if (onLoading && loading) {
      onLoading();
    }
  }, [onLoading, loading]);
  useEffect(() => {
    if (!wait && data) {
      const { info, results } = data[dataType] || {};
      const { pages, prev } = info || {};
      const currentPage = 1 + (prev || 0);

      if (pages && results) {
        dispatch({ type: WRITE_RESULTS_BY_PAGE, payload: { currentPage, results } });
        if (currentPage < pages) {
          doQuery({
            variables: {
              page: currentPage + 1,
              filter: { name: state.name },
            },
          });
        }
      }
    }
  }, [dispatch, doQuery, dataType, state.name, wait, data]);
  useEffect(() => {
    onCompleted && onCompleted(state.resultsByPages);
  }, [onCompleted, state.resultsByPages, state.resultsByPages.length]);
  useEffect(() => {
    if (wait && !timer) {
      doQuery({
        variables: {
          page: 1,
          filter: { name: state.name },
        },
      });
      setWait(false);
      setTimer(setTimeout(() => {
        timer && clearTimeout(timer);
        setTimer(null);
      }, FINDER_REQUESTS_INTERVAL));
    }
  }, [state.name, wait, timer, doQuery, dispatch]);

  return (
    <StyledInput
      onChange={(event): void => {
        dispatch({ type: UPDATE_NAME, payload: event.currentTarget.value });
      }}
      placeholder={FINDER_PLACEHOLDER}
    />
  );
};
