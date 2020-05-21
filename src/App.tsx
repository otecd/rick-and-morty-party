import React from 'react';
import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 141px;
  font: inherit;
`;

export default (): JSX.Element => (
  <StyledApp>
    <p>
      Test
    </p>
  </StyledApp>
);
