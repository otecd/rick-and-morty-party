import { Dispatch } from 'react';

export const collectionActionTypes = {
  ITEM_EXCLUDED: 'ITEM_EXCLUDED',
  ITEMS_PAGE_ADDED: 'ITEMS_PAGE_ADDED',
  ITEMS_CLEARED: 'ITEMS_CLEARED',
};
export default {
  writeItemsByPage: (dispatch: Dispatch<ReducerAction>, payload: {
    currentPage: number;
    results: Item[];
  }): void => {
    dispatch({ type: collectionActionTypes.ITEMS_PAGE_ADDED, payload });
  },
  excludeItem: (dispatch: Dispatch<ReducerAction>, payload: Item): void => {
    dispatch({ type: collectionActionTypes.ITEM_EXCLUDED, payload });
  },
  clearItems: (dispatch: Dispatch<ReducerAction>): void => {
    dispatch({ type: collectionActionTypes.ITEMS_CLEARED });
  },
};
