import React, {
  memo,
  useState,
  useContext,
} from 'react';
import styled from 'styled-components';
import { FinderStoreContext } from '../../store/finder';
import { ReactComponent as CrossIcon } from '../../icons/cross.svg';

const StyledCard = styled.div<{ opacity: number }>`
  position: relative;
  padding-bottom: 1rem;
  width: 25%;
  text-align: center;
  opacity: ${(props): number => props.opacity};
  transition: opacity 0.15s;
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

export default memo(({
  id,
  name,
  image,
}: {
  id: string | null;
  name: string | null;
  image: string | null;
}): JSX.Element => {
  const { actions } = useContext(FinderStoreContext);
  const [hidden, hide] = useState(false);

  return (
    <StyledCard opacity={+!hidden}>
      <StyledImage src={image || ''} />
      <StyledCloseButton
        onClick={(): void => {
          hide(true);
          setTimeout(() => {
            actions.excludeItem({ id, name, image });
            hide(false);
          }, 250);
        }}
      >
        <CrossIcon />
      </StyledCloseButton>
    </StyledCard>
  );
});
