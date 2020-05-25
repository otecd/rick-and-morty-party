import React, {
  useReducer,
  Dispatch,
  PropsWithChildren,
  ReactElement,
} from 'react';
import {
  AppStoreContext,
  appInitialState,
  appReducer,
  appActionsBuilder,
} from '../../store/app';

export default ({ children }: PropsWithChildren<{}>): ReactElement => {
  const [state, dispatch]: [
    AppState,
    Dispatch<ReducerAction>
  ] = useReducer(appReducer, appInitialState);

  return (
    <AppStoreContext.Provider
      value={{ state, actions: appActionsBuilder(dispatch) }}
    >
      {children}
    </AppStoreContext.Provider>
  );
};
