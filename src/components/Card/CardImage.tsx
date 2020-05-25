import styled from 'styled-components';

export default styled.img`
  width: ${(props): string => props.theme.sizes.cardImage.width};
  height: ${(props): string => props.theme.sizes.cardImage.height};
  object-fit: cover;
  image-rendering: -webkit-optimize-contrast;
`;
