import React, {
  useReducer,
  Dispatch,
  PropsWithChildren,
  ReactElement,
} from 'react';
import {
  CollectionStoreContext,
  collectionInitialState,
  collectionReducer,
  collectionActionsBuilder,
} from '../../store/collection';

export default ({ children }: PropsWithChildren<{}>): ReactElement => {
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
