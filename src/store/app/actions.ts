import { useCallback, Dispatch } from 'react';

export const appActionTypes = {
  THEME_CHANGED: 'THEME_CHANGED',
};

export default (dispatch: Dispatch<ReducerAction>): AppActions => ({
  toggleTheme: useCallback((): void => {
    dispatch({ type: appActionTypes.THEME_CHANGED });
  }, [dispatch]),
});
