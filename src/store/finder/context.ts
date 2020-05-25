import { createContext } from 'react';
import finderInitialState from './initial-state';

export default createContext<{
  state: FinderState;
  actions: FinderActions;
}>({
  state: finderInitialState,
  actions: {
    updateName: (): void => undefined,
    updateNameTyped: (): void => undefined,
    throwError: (): void => undefined,
    clearError: (): void => undefined,
    startLoading: (): void => undefined,
    stopLoading: (): void => undefined,
  },
});
