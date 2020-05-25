import React, { PropsWithChildren } from 'react';
import FinderStoreProvider from './FinderStoreProvider';
import CollectionStoreProvider from './CollectionStoreProvider';

export default ({ children }: PropsWithChildren<{}>): JSX.Element => (
  <FinderStoreProvider>
    <CollectionStoreProvider>
      {children}
    </CollectionStoreProvider>
  </FinderStoreProvider>
);
