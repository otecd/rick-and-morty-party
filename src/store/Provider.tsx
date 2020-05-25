import React, { PropsWithChildren, ReactElement } from 'react';
import { AppStoreProvider } from './app';
import { FinderStoreProvider } from './finder';
import { CollectionStoreProvider } from './collection';
import { PartyStoreProvider } from './party';

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
