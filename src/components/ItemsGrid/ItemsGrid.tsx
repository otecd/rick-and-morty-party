import React, { useContext } from 'react';
import styled from 'styled-components';
import { FinderStoreContext } from '../../store/finder';
import { CollectionStoreContext } from '../../store/collection';
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
  const { state: finderState } = useContext(FinderStoreContext);
  const { state: collectionState } = useContext(CollectionStoreContext);

  return (
    <StyledGrid>
      {finderState.error && <StyledError>{finderState.error}</StyledError>}
      {collectionState.itemsByPages.length && !finderState.error
        ? collectionState.itemsByPages.flat()
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
      {finderState.loading ? (<StyledOverlay />) : null}
    </StyledGrid>
  );
};
