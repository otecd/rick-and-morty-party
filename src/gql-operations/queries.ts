import { gql } from 'apollo-boost';

export const CHARACTERS = gql`
  query Characters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        pages
        next
        prev
      }
      results {
        id
        name
        image
      }
    }
  }
`;

export default { CHARACTERS };
