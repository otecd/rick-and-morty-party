import { useReducer, Dispatch } from 'react';
import { Characters_characters_results as ItemsType } from '../../gql-operations/types/Characters';

interface ReducerState {
  name: string;
  excludedItems: ItemsType[];
  resultsByPages: ItemsType[][];
}
interface ReducerAction {
  type: string;
  payload?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export const finderActionTypes = {
  UPDATE_NAME: 'UPDATE_NAME',
  UPDATE_EXCLUDED_ITEMS: 'UPDATE_EXCLUDED_ITEMS',
  WRITE_RESULTS_BY_PAGE: 'WRITE_RESULTS_BY_PAGE',
};

const reducer = (state: ReducerState, action: ReducerAction): ReducerState => {
  const newState = { ...state };

  switch (action.type) {
    case finderActionTypes.UPDATE_NAME:
      newState.name = action.payload.toLowerCase();
      break;
    case finderActionTypes.UPDATE_EXCLUDED_ITEMS:
      newState.excludedItems = action.payload;
      break;
    case finderActionTypes.WRITE_RESULTS_BY_PAGE: {
      const { currentPage, results } = action.payload || {};
      const resultsByPages: ItemsType[][] = currentPage === 1 ? [] : newState.resultsByPages;
      const noIds = newState.excludedItems.map(item => item.id);

      if (resultsByPages.length < currentPage) {
        resultsByPages.push(results.filter((item: ItemsType) => !noIds.includes(item.id)));
      }
      newState.resultsByPages = resultsByPages;
      break;
    }
    default:
      break;
  }

  return newState;
};
const initialState = {
  name: '',
  excludedItems: [],
  resultsByPages: [],
};

export const useFinderReducer = (): [ReducerState, Dispatch<ReducerAction>] => useReducer(
  reducer,
  initialState
);
