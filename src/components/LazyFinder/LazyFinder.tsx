import React, {
  memo,
  useEffect,
  useState,
  useContext,
  useCallback,
  ReactElement,
} from 'react';
import styled from 'styled-components';
import useFinderLazyQuery from './use-finder-lazy-query';
import { FinderStoreContext } from '../../store/finder';
import { CollectionStoreContext } from '../../store/collection';
import {
  FINDER_REQUESTS_INTERVAL,
  FINDER_MIN_NAME_LENGTH,
  FINDER_PLACEHOLDER,
  FINDER_ERROR_NOT_FOUND,
  FINDER_ERROR_NAME_LENGTH_TOO_FEW,
} from '../../const';

const StyledInput = styled.input`
  border: 2px solid #A0A0A0;
  text-transform: uppercase;
  font: inherit;
  width: 750px;
  padding: 0.7rem 0.9rem;
  outline: none;
  background-color: ${(props): string => props.theme.colors.input.background};

  @media (max-width: 820px) {
    width: 85%;
  }
`;

export default memo(({ dataType, query }: {
  dataType: DataType;
  query: GlobalDocumentNode;
}): ReactElement => {
  const finderStore = useContext(FinderStoreContext);
  const {
    nameTyped,
    error,
    name,
    loading,
  } = finderStore.state;
  const {
    updateName,
    updateNameTyped,
    stopLoading,
    throwError,
  } = finderStore.actions;
  const collectionStore = useContext(CollectionStoreContext);
  const {
    itemsByPages,
  } = collectionStore.state;
  const {
    writeItemsByPage,
    clearItems,
  } = collectionStore.actions;
  const throwErrorAndClearItems = useCallback((message: string) => {
    throwError(message);
    clearItems();
  }, [throwError, clearItems]);
  const { doQuery, data } = useFinderLazyQuery({ query, errorMessageCb: throwErrorAndClearItems });
  const [timer, setTimer] = useState<number | null>(null);

  useEffect(() => {
    if (nameTyped && nameTyped.length > FINDER_MIN_NAME_LENGTH) {
      if (!timer && !error && nameTyped !== name) {
        updateName(nameTyped);
        setTimer(setTimeout(() => {
          timer && clearTimeout(timer);
          setTimer(null);
        }, FINDER_REQUESTS_INTERVAL));
      }
    } else {
      throwErrorAndClearItems(FINDER_ERROR_NAME_LENGTH_TOO_FEW);
    }
  }, [timer, nameTyped, error, name, itemsByPages.length, updateName, throwErrorAndClearItems]);
  useEffect(() => {
    name && doQuery({ page: 1, name });
  }, [name, doQuery]);
  useEffect(() => {
    if ((name === nameTyped) && !loading && !itemsByPages.length) {
      throwError(FINDER_ERROR_NOT_FOUND);
    }
  }, [name, nameTyped, loading, itemsByPages.length, throwError]);
  useEffect(() => {
    if (!error) {
      if (data && name === nameTyped) {
        const { info, results } = data[dataType] || {};
        const { pages, prev } = info || {};
        const currentPage = 1 + (prev || 0);

        if (pages && results) {
          writeItemsByPage({ currentPage, results });
          if (currentPage < pages) {
            doQuery({ page: currentPage + 1, name });
          } else {
            stopLoading();
          }
        }
      }
    }
  }, [data, dataType, name, nameTyped, error, stopLoading, doQuery, writeItemsByPage]);

  return (
    <StyledInput
      onChange={(event): void => {
        updateNameTyped(event.currentTarget.value);
      }}
      placeholder={FINDER_PLACEHOLDER}
    />
  );
});
