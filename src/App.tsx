import React, { FC } from 'react';
import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
`;

const App: FC = () => (
  <StyledApp>
    <p>
      {'Test '}
      <code>code</code>
    </p>
  </StyledApp>
);

export default App;
