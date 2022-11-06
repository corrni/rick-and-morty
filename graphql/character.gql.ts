import { gql } from "@apollo/client";

export const GET_CHARACTER = /* GraphQL */ gql`
  query getCharacter($characterId: ID!) {
    character(id: $characterId) {
      id
      name
      status
      species
      gender
      origin {
        name
        dimension
      }
      location {
        name
        dimension
      }
      image
      episode {
        id
      }
    }
  }
`;
