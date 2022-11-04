// overmind/actions.ts
import {IAction} from 'overmind';
import {Result} from '../interfaces/RickAndMorty';

//ACTION GET DATA API
// export const getData = async ({state}: any) => {
//   const res = await fetch('https://rickandmortyapi.com/api/character');
//   const resJSON = await res.json();
//   state.data = resJSON.results;
//   state.isLoading = false;
// };

//ACTION GET DATA API WITH GRAPHQL
export const getCharacters = async ({state, effects}: any) => {
  const {characters} = await effects.gql.queries.characters();
  state.data = characters;
  console.log(characters);
  state.isLoading = false;
};
// export const getCharacters = async ({state, effects}: any) => {
//   const {characters} = await effects.gql.queries.characters();
//   state.data = characters;
//   console.log(characters);
//   state.isLoading = false;
// };

//ACTION STATE MODAL
export const stateModal: IAction<boolean, void> = ({state}, isVisible) => {
  state.modal = isVisible;
};

//SET DATA STATE dataModal
export const setDataModal: IAction<Result, void> = ({state}, dataResul) => {
  state.dataModal = dataResul;
};

//leer documentacion graphQL
