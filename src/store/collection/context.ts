import { createContext } from 'react';
import collectionInitialState from './initial-state';

export default createContext<{
  state: CollectionState;
  actions: CollectionActions;
}>({
  state: collectionInitialState,
  actions: {
    writeItemsByPage: (): void => undefined,
    excludeItem: (): void => undefined,
    clearItems: (): void => undefined,
  },
});
