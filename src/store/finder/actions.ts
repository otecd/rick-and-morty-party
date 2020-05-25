import { useCallback, Dispatch } from 'react';

export const finderActionTypes = {
  NAME_UPDATED: 'NAME_UPDATED',
  NAME_TYPED_UPDATED: 'NAME_TYPED_UPDATED',
  ERROR_THROWN: 'ERROR_THROWN',
  ERROR_CLEARED: 'ERROR_CLEARED',
  LOADING_STARTED: 'LOADING_STARTED',
  LOADING_ENDED: 'LOADING_ENDED',
};

export default (dispatch: Dispatch<ReducerAction>): FinderActions => ({
  updateName: useCallback((payload: string): void => {
    dispatch({ type: finderActionTypes.NAME_UPDATED, payload });
    dispatch({ type: finderActionTypes.LOADING_STARTED });
  }, [dispatch]),
  updateNameTyped: useCallback((payload: string): void => {
    dispatch({ type: finderActionTypes.NAME_TYPED_UPDATED, payload });
    dispatch({ type: finderActionTypes.ERROR_CLEARED });
  }, [dispatch]),
  throwError: useCallback((payload: string): void => {
    dispatch({ type: finderActionTypes.ERROR_THROWN, payload });
    dispatch({ type: finderActionTypes.NAME_UPDATED, payload: '' });
    dispatch({ type: finderActionTypes.LOADING_ENDED });
  }, [dispatch]),
  clearError: useCallback((): void => {
    dispatch({ type: finderActionTypes.ERROR_CLEARED });
  }, [dispatch]),
  startLoading: useCallback((): void => {
    dispatch({ type: finderActionTypes.LOADING_STARTED });
  }, [dispatch]),
  stopLoading: useCallback((): void => {
    dispatch({ type: finderActionTypes.LOADING_ENDED });
  }, [dispatch]),
});
