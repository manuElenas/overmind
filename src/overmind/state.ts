import {
  Episode,
  Gender,
  Result,
  Species,
  Status,
} from '../interfaces/RickAndMorty';

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
    episode: Episode[];
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
