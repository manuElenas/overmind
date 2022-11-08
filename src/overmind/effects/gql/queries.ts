import {gql} from 'overmind-graphql';

export const characters = gql`
  query {
    characters {
      results {
        id
        name
        species
        status
        image
      }
    }
  }
`;

export const nextPage = gql`
  query nextPage($next: Int!) {
    characters(page: $next) {
      results {
        id
        name
        species
        status
        image
      }
    }
  }
`;

export const getCharte = gql`
  query getCharter($pId: ID!) {
    character(id: $pId) {
      name
      image
      status
      species
      episode {
        episode
        name
      }
    }
  }
`;
