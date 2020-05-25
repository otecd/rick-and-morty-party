import React, {
  useReducer,
  Dispatch,
  PropsWithChildren,
} from 'react';
import {
  PartyStoreContext,
  partyInitialState,
  partyReducer,
  partyActionsBuilder,
} from '../../store/party';

export default ({ children }: PropsWithChildren<{}>): JSX.Element => {
  const [state, dispatch]: [
    PartyState,
    Dispatch<ReducerAction>
  ] = useReducer(partyReducer, partyInitialState);

  return (
    <PartyStoreContext.Provider
      value={{ state, actions: partyActionsBuilder(dispatch) }}
    >
      {children}
    </PartyStoreContext.Provider>
  );
};
