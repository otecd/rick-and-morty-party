import React from 'react';
import styled from 'styled-components';
import {
  StoreProvider,
  LazyCharactersFinder,
  CharactersCollection,
  Party,
} from './components';
import { NAME_MORTY, NAME_RICK } from './const';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 141px;
  font: inherit;
  user-select: none;
`;

export default (): JSX.Element => (
  <StoreProvider>
    <StyledApp>
      <LazyCharactersFinder />
      <CharactersCollection />
      <Party roles={[NAME_RICK, NAME_MORTY]} />
    </StyledApp>
  </StoreProvider>
);
