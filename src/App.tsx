import React from 'react';
import styled from 'styled-components';
import { LazyCharactersFinder } from './components';

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 141px;
  font: inherit;
`;

export default (): JSX.Element => (
  <StyledApp>
    <LazyCharactersFinder />
  </StyledApp>
);
