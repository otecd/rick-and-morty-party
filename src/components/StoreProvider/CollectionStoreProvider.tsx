import React, {
  useReducer,
  Dispatch,
  PropsWithChildren,
} from 'react';
import {
  CollectionStoreContext,
  collectionInitialState,
  collectionReducer,
  collectionActionsBuilder,
} from '../../store/collection';

export default ({ children }: PropsWithChildren<{}>): JSX.Element => {
  const [state, dispatch]: [
    CollectionState,
    Dispatch<ReducerAction>
  ] = useReducer(collectionReducer, collectionInitialState);

  return (
    <CollectionStoreContext.Provider
      value={{ state, actions: collectionActionsBuilder(dispatch) }}
    >
      {children}
    </CollectionStoreContext.Provider>
  );
};
