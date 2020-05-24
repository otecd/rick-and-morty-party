import React, { useContext } from 'react';
import styled from 'styled-components';
import { FinderStoreContext } from '../../store/finder';
import { ReactComponent as CrossIcon } from '../../icons/cross.svg';

const StyledCard = styled.div`
  position: relative;
  padding-bottom: 1rem;
  width: 25%;
  text-align: center;
`;
const StyledImage = styled.img`
  width: 6rem;
  height: 7.33rem;
`;
const StyledCloseButton = styled.button`
  position: absolute;
  width: 1rem;
  height: 1rem;
  top: 8px;
  right: calc(0.5rem + 8px);
  border-radius: 50%;
  background-color: ${(props): string => props.theme.colors.secondary};
  color: ${(props): string => props.theme.colors.main};
  border: none;
  outline: none;
  transition: background-color 0.3s;

  &:active {
    background-color: red;
  }
`;

export default ({
  id,
  name,
  image,
}: {
  id: string | null;
  name: string | null;
  image: string | null;
}): JSX.Element => {
  const { actions } = useContext(FinderStoreContext);

  return (
    <StyledCard>
      <StyledImage src={image || ''} />
      <StyledCloseButton
        onClick={(): void => {
          actions.excludeItem({ id, name, image });
        }}
      >
        <CrossIcon />
      </StyledCloseButton>
    </StyledCard>
  );
};
