import { createContext, Dispatch } from 'react';

export interface ReducerState {
  name: string;
  excludedItems: Item[];
  resultsByPages: Item[][];
}

const dispatch: Dispatch<ReducerAction> = () => undefined;

export const actionTypes = {
  UPDATE_NAME: 'UPDATE_NAME',
  UPDATE_EXCLUDED_ITEMS: 'UPDATE_EXCLUDED_ITEMS',
  WRITE_RESULTS_BY_PAGE: 'WRITE_RESULTS_BY_PAGE',
};
export const initialState: ReducerState = {
  name: '',
  excludedItems: [],
  resultsByPages: [],
};
export const StoreContext = createContext({ state: initialState, dispatch });
