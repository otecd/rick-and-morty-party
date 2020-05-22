import React from 'react';
import styled from 'styled-components';
import { StoreProvider, LazyCharactersFinder } from './components';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 141px;
  font: inherit;
`;

export default (): JSX.Element => (
  <StoreProvider>
    <StyledApp>
      <LazyCharactersFinder
        excludedItems={[]}
        onCompleted={(data): void => undefined}
        onError={(error): void => undefined}
        onLoading={(): void => undefined}
      />
    </StyledApp>
  </StoreProvider>
);
