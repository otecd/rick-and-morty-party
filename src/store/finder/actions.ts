import { Dispatch } from 'react';

export const finderActionTypes = {
  NAME_UPDATED: 'NAME_UPDATED',
  NAME_TYPED_UPDATED: 'NAME_TYPED_UPDATED',
  ERROR_THROWN: 'ERROR_THROWN',
  ERROR_CLEARED: 'ERROR_CLEARED',
  LOADING_STARTED: 'LOADING_STARTED',
  LOADING_ENDED: 'LOADING_ENDED',
};
export default {
  updateName: (dispatch: Dispatch<ReducerAction>, payload: string): void => {
    dispatch({ type: finderActionTypes.NAME_UPDATED, payload });
    dispatch({ type: finderActionTypes.LOADING_STARTED });
  },
  updateNameTyped: (dispatch: Dispatch<ReducerAction>, payload: string): void => {
    dispatch({ type: finderActionTypes.NAME_TYPED_UPDATED, payload });
    dispatch({ type: finderActionTypes.ERROR_CLEARED });
  },
  throwError: (dispatch: Dispatch<ReducerAction>, payload: string): void => {
    dispatch({ type: finderActionTypes.ERROR_THROWN, payload });
    dispatch({ type: finderActionTypes.NAME_UPDATED, payload: '' });
    dispatch({ type: finderActionTypes.LOADING_ENDED });
  },
  clearError: (dispatch: Dispatch<ReducerAction>): void => {
    dispatch({ type: finderActionTypes.ERROR_CLEARED });
  },
  startLoading: (dispatch: Dispatch<ReducerAction>): void => {
    dispatch({ type: finderActionTypes.LOADING_STARTED });
  },
  stopLoading: (dispatch: Dispatch<ReducerAction>): void => {
    dispatch({ type: finderActionTypes.LOADING_ENDED });
  },
};
