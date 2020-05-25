import styled from 'styled-components';

export default styled.div<{ content: string }>`
  position: relative;
  width: ${(props): string => props.theme.sizes.cardImage.width};
  height: ${(props): string => props.theme.sizes.cardImage.height};
  background-color: ${(props): string => props.theme.colors.cardPlaceholder};

  &::after {
    content: ${(props): string => props.content};
    position: absolute;
    width: 100%;
    bottom: 1rem;
    font: inherit;
    font-size: 0.8rem;
  }
`;
