import { createContext, Dispatch } from 'react';

export interface ReducerState {
  name: string;
  excludedItems: Item[];
  resultsByPages: Item[][];
  error: string | null;
  loading: boolean;
}

const dispatch: Dispatch<ReducerAction> = () => undefined;

export const actionTypes = {
  UPDATE_NAME: 'UPDATE_NAME',
  UPDATE_EXCLUDED_ITEMS: 'UPDATE_EXCLUDED_ITEMS',
  WRITE_RESULTS_BY_PAGE: 'WRITE_RESULTS_BY_PAGE',
  SET_ERROR: 'SET_ERROR',
  STOP_LOADING: 'STOP_LOADING',
};
export const initialState: ReducerState = {
  name: '',
  excludedItems: [],
  resultsByPages: [],
  error: null,
  loading: false,
};
export const StoreContext = createContext({ state: initialState, dispatch });
