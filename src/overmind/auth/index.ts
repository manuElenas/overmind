//INSTANCIANDO UNA MAQUINA
//Para usar la máquina como parte de su estado necesita crearla
import {statechart, Statechart} from 'overmind-statechart';
import {state} from './state';
import * as actions from './actions';
import {gql} from '../effects/gql';

const config = {
  state,
  actions,
  effects: {gql},
};

const loginChart: Statechart<
  typeof config,
  {
    INGRESAR: void;
    AUTENTICANDO: void;
    AUTENTICADO: void;
    NO_AUTENTICADO: void;
  }
> = {
  initial: 'INGRESAR',
  states: {
    INGRESAR: {
      on: {
        loginUser: 'AUTENTICANDO',
        noAuthentic: 'NO_AUTENTICADO',
      },
    },
    AUTENTICANDO: {
      on: {
        fullLoging: 'AUTENTICADO',
        noAuthentic: 'NO_AUTENTICADO',
      },
    },
    AUTENTICADO: {
      on: {
        logOut: 'INGRESAR',
      },
    },
    NO_AUTENTICADO: {
      on: {
        loginUser: 'AUTENTICANDO',
        noAuthentic: 'NO_AUTENTICADO',
      },
    },
  },
};

export default statechart(config, loginChart);
