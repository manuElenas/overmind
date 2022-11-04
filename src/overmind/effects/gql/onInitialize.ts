export const onInitialize = ({effects}: any) => {
  effects.gql.initialize({
    endpoint: 'https://rickandmortyapi.com/graphql',
  });
};
