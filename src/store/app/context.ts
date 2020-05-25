import { createContext } from 'react';
import appInitialState from './initial-state';

export default createContext<{
  state: AppState;
  actions: AppActions;
}>({
  state: appInitialState,
  actions: {
    toggleTheme: (): void => undefined,
  },
});
