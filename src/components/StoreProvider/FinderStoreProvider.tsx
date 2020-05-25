import React, {
  useReducer,
  Dispatch,
  PropsWithChildren,
} from 'react';
import {
  FinderStoreContext,
  finderInitialState,
  finderReducer,
  finderActionsBuilder,
} from '../../store/finder';

export default ({ children }: PropsWithChildren<{}>): JSX.Element => {
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
