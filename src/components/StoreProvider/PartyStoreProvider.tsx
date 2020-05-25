import React, {
  useReducer,
  Dispatch,
  PropsWithChildren,
  ReactElement,
} from 'react';
import {
  PartyStoreContext,
  partyInitialState,
  partyReducer,
  partyActionsBuilder,
} from '../../store/party';

export default ({ children }: PropsWithChildren<{}>): ReactElement => {
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
