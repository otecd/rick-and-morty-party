import React, { useContext } from 'react';
import styled from 'styled-components';
import { FinderStoreContext } from '../../store/finder';
import CardItem from '../CardItem/CardItem';

const StyledGrid = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 840px;
  padding-top: 1rem;
  font: inherit;

  @media (max-width: 820px) {
    width: 85%;
  }
`;
const StyledOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${(props): string => props.theme.colors.overlay};
`;
const StyledError = styled.p`
  color: ${(props): string => props.theme.colors.error};
`;

export default (): JSX.Element => {
  const { state } = useContext(FinderStoreContext);

  return (
    <StyledGrid>
      {state.error && <StyledError>{state.error}</StyledError>}
      {state.resultsByPages.length && !state.error
        ? state.resultsByPages.flat()
          .map(({
            id,
            name,
            image,
          }, i) => (
            <CardItem
              key={`item${123 + i}`}
              id={id}
              name={name}
              image={image}
            />
          ))
        : null}
      {state.loading ? (<StyledOverlay />) : null}
    </StyledGrid>
  );
};
