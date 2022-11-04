import {gql} from 'overmind-graphql';

export const characters = gql`
  query {
    characters {
      results {
        id
        name
        species
      }
    }
  }
`;
