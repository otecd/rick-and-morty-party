import React, { PropsWithChildren, ReactElement } from 'react';
import FinderStoreProvider from './FinderStoreProvider';
import CollectionStoreProvider from './CollectionStoreProvider';
import PartyStoreProvider from './PartyStoreProvider';

export default ({ children }: PropsWithChildren<{}>): ReactElement => (
  <FinderStoreProvider>
    <CollectionStoreProvider>
      <PartyStoreProvider>
        {children}
      </PartyStoreProvider>
    </CollectionStoreProvider>
  </FinderStoreProvider>
);
