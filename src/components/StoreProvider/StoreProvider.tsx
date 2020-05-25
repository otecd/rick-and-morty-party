import React, { PropsWithChildren, ReactElement } from 'react';
import AppStoreProvider from './AppStoreProvider';
import FinderStoreProvider from './FinderStoreProvider';
import CollectionStoreProvider from './CollectionStoreProvider';
import PartyStoreProvider from './PartyStoreProvider';

export default ({ children }: PropsWithChildren<{}>): ReactElement => (
  <AppStoreProvider>
    <FinderStoreProvider>
      <CollectionStoreProvider>
        <PartyStoreProvider>
          {children}
        </PartyStoreProvider>
      </CollectionStoreProvider>
    </FinderStoreProvider>
  </AppStoreProvider>
);
