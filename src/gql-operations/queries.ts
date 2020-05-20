import { gql } from 'apollo-boost';

export const CHARACTERS = gql`
  query Characters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
      }
    }
  }
`;

export default { CHARACTERS };
