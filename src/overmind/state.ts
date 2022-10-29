//overmind/state.ts
//type State = {
//  counter: number;
//};

import {Result} from '../interfaces/RickAndMorty';

//export const state: State = {
//  counter: 20,
//};
type State = {
  data: Result[];
  isLoading: boolean;
};

export const state: State = {
  data: [],
  isLoading: true,
};
