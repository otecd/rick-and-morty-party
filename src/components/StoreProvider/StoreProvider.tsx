import React, { PropsWithChildren } from 'react';
import FinderStoreProvider from './FinderStoreProvider';

export default ({ children }: PropsWithChildren<{}>): JSX.Element => (
  <FinderStoreProvider>
    {children}
  </FinderStoreProvider>
);
