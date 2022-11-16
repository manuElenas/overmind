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
  userName: string;
};

export const state: State = {
  data: [],
  isLoading: true,
  modal: false,
  dataModal: {
    id: 0,
    name: '',
    image: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg',
    status: null,
    species: null,
    gender: null,
    episode: [],
  },
  userName: '',
};
