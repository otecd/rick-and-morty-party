import React, {
  memo,
  ReactChild,
  ReactElement,
  ReactEventHandler,
} from 'react';
import styled from 'styled-components';

const StyledCard = styled.div<{ opacity: number }>`
  position: relative;
  padding: 0 0.5rem 1rem;
  text-align: center;
  opacity: ${(props): number => props.opacity};
  transition: opacity 0.15s;

  & > svg {
    height: inherit;
    width: inherit;
  }
`;
const CardImage = styled.img`
  width: ${(props): string => props.theme.sizes.cardImage.width};
  height: ${(props): string => props.theme.sizes.cardImage.height};
  object-fit: cover;
  image-rendering: -webkit-optimize-contrast;
`;
const CardPlaceholder = styled.div<{ content: string }>`
  position: relative;
  display: flex;
  margin: auto;
  width: ${(props): string => props.theme.sizes.cardImage.width};
  height: ${(props): string => props.theme.sizes.cardImage.height};
  background-color: ${(props): string => props.theme.colors.cardPlaceholder};
  text-transform: uppercase;

  &::after {
    content: '${(props): string => props.content}';
    position: absolute;
    width: 100%;
    bottom: 1rem;
    font: inherit;
    font-size: 0.8rem;
    color: ${(props): string => props.theme.colors.secondary};
  }
`;

export default memo(({
  placeholder = '',
  image,
  opacity = 1,
  children,
  onClick,
  onTransitionEnd,
}: {
  placeholder?: string;
  image?: string | null;
  opacity?: number;
  children?: ReactChild | (ReactChild | null)[] | null;
  onClick?: ReactEventHandler;
  onTransitionEnd?: ReactEventHandler;
}): ReactElement => (
  <StyledCard
    opacity={opacity}
    onClick={onClick}
    onTransitionEnd={onTransitionEnd}
  >
    {image ? <CardImage src={image} /> : <CardPlaceholder content={placeholder} />}
    {children}
  </StyledCard>
));
