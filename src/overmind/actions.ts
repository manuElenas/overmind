// overmind/actions.ts
import {IAction} from 'overmind';

export const getData = async ({state}: any) => {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const resJSON = await res.json();
  state.data = resJSON.results;
  state.isLoading = false;
};

export const increment: IAction<number, void> = ({state}, incrementBy) => {
  state.counter += incrementBy;
};
