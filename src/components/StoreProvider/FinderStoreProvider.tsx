import React, {
  useReducer,
  Dispatch,
  PropsWithChildren,
} from 'react';
import {
  StoreContext,
  ReducerState,
  initialState,
} from '../../store/finder';
import finderReducer from '../../store/reducers/finder';

export default ({ children }: PropsWithChildren<{}>): JSX.Element => {
  const [state, dispatch]: [ReducerState, Dispatch<ReducerAction>] = useReducer(
    finderReducer,
    initialState
  );

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
