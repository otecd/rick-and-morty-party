import { createContext } from 'react';
import partyInitialState from './initial-state';

export default createContext<{
  state: PartyState;
  actions: PartyActions;
}>({
  state: partyInitialState,
  actions: {
    admitMember: (): void => undefined,
  },
});
