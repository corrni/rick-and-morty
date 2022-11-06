import { gql } from "@apollo/client";

export const GET_CHARACTER_LIST = /* GraphQL */ gql`
  query getCharacterList($currentPage: Int) {
    characters(page: $currentPage) {
      results {
        id
        name
        image
      }
      info {
        count
        pages
        next
        prev
      }
    }
  }
`;
