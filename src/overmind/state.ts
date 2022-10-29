//overmind/state.ts
//type State = {
//  counter: number;
//};

import {Gender, Result, Species, Status} from '../interfaces/RickAndMorty';

//export const state: State = {
//  counter: 20,
//};
type State = {
  data: Result[];
  isLoading: boolean;
  modal: boolean;
  dataModal: {
    id: number;
    name: string;
    image: string;
    status: Status | null;
    species: Species | null;
    gender: Gender | null;
    episode: String[];
  };
};

export const state: State = {
  data: [],
  isLoading: true,
  modal: false,
  dataModal: {
    id: 0,
    name: '',
    image: '',
    status: null,
    species: null,
    gender: null,
    episode: [],
  },
};
