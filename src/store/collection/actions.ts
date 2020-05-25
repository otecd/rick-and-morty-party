import { useCallback, Dispatch } from 'react';

export const collectionActionTypes = {
  ITEM_EXCLUDED: 'ITEM_EXCLUDED',
  ITEMS_PAGE_ADDED: 'ITEMS_PAGE_ADDED',
  ITEMS_CLEARED: 'ITEMS_CLEARED',
};

export default (dispatch: Dispatch<ReducerAction>): CollectionActions => ({
  writeItemsByPage: useCallback((payload: {
    currentPage: number;
    results: Item[];
  }): void => {
    dispatch({ type: collectionActionTypes.ITEMS_PAGE_ADDED, payload });
  }, [dispatch]),
  excludeItem: useCallback((payload: Item): void => {
    dispatch({ type: collectionActionTypes.ITEM_EXCLUDED, payload });
  }, [dispatch]),
  clearItems: useCallback((): void => {
    dispatch({ type: collectionActionTypes.ITEMS_CLEARED });
  }, [dispatch]),
});
