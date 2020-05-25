import styled from 'styled-components';

export default styled.div`
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
