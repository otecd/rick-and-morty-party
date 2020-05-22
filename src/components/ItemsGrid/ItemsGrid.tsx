import React, { useContext } from 'react';
import styled from 'styled-components';
import { StoreContext as FinderStoreContext } from '../../store/finder';

const StyledGrid = styled.div`
  display: flex;
  justify-content: center;
  width: 810px;
  padding-top: 30px;
  font: inherit;
`;

export default (): JSX.Element => {
  const { state } = useContext(FinderStoreContext);

  return (
    <StyledGrid>
      {JSON.stringify(state.resultsByPages, null, 2)}
    </StyledGrid>
  );
};
