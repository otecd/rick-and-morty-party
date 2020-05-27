import { Dispatch } from 'react';

export const appActionTypes = {
  THEME_CHANGED: 'THEME_CHANGED',
};
export default {
  toggleTheme: (dispatch: Dispatch<ReducerAction>): void => {
    dispatch({ type: appActionTypes.THEME_CHANGED });
  },
};
