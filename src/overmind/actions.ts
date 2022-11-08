// overmind/actions.ts
import {IAction} from 'overmind';
import {Context} from '.';
import {Result} from '../interfaces/RickAndMorty';

//ACTION GET DATA API WITH GRAPHQL
export const getCharacters = async ({state, effects}: any) => {
  const {characters} = await effects.gql.queries.characters();
  state.data = characters.results;
  state.isLoading = false;
};

export const onInitializeOvermind = async ({effects}: any) => {
  effects.gql.initialize({
    endpoint: 'https://rickandmortyapi.com/graphql',
  });
};

//GET CHARACTER
export const getPerson = async (
  {state, effects}: Context,
  id: number,
): Promise<void> => {
  const {character} = await effects.gql.queries.getCharte({pId: id});
  state.dataModal = character;
  console.log(state.dataModal.episode);
};

//ACTION STATE MODAL
export const stateModal: IAction<boolean, void> = ({state}, isVisible) => {
  state.modal = isVisible;
};

//SET DATA STATE dataModal
export const setDataModal: IAction<Result, void> = ({state}, dataResul) => {
  state.dataModal = dataResul;
};

//Cambiar pagina
export const nextPages = async (
  {state, effects}: Context,
  page: number,
): Promise<void> => {
  const {characters} = await effects.gql.queries.nextPage({
    next: page,
  });

  state.data = characters.results;
};

//leer documentacion graphQL
