import { createContext } from 'react';
import finderInitialState from './initial-state';

export default createContext<{
  state: State;
  actions: Actions;
}>({
  state: finderInitialState,
  actions: {
    updateName: (): void => undefined,
    updateNameTyped: (): void => undefined,
    writeResultsByPage: (): void => undefined,
    throwError: (): void => undefined,
    clearError: (): void => undefined,
    startLoading: (): void => undefined,
    stopLoading: (): void => undefined,
    excludeItem: (): void => undefined,
  },
});
