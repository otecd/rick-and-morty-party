import React, { useContext } from 'react';
import styled from 'styled-components';
import { FinderStoreContext } from '../../store/finder';

const StyledGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 810px;
  padding-top: 30px;
  font: inherit;
`;

export default (): JSX.Element => {
  const { state } = useContext(FinderStoreContext);

  return (
    <StyledGrid>
      {state.loading && <small>LOADING</small>}
      {state.error && <strong>{state.error}</strong>}
      {JSON.stringify(state.resultsByPages, null, 2)}
    </StyledGrid>
  );
};
