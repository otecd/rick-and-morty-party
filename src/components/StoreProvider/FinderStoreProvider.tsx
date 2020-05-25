import React, {
  useReducer,
  Dispatch,
  PropsWithChildren,
  ReactElement,
} from 'react';
import {
  FinderStoreContext,
  finderInitialState,
  finderReducer,
  finderActionsBuilder,
} from '../../store/finder';

export default ({ children }: PropsWithChildren<{}>): ReactElement => {
  const [state, dispatch]: [
    FinderState,
    Dispatch<ReducerAction>
  ] = useReducer(finderReducer, finderInitialState);

  return (
    <FinderStoreContext.Provider
      value={{ state, actions: finderActionsBuilder(dispatch) }}
    >
      {children}
    </FinderStoreContext.Provider>
  );
};
