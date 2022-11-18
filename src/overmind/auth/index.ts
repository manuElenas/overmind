//INSTANCIANDO UNA MAQUINA
//Para usar la máquina como parte de su estado necesita crearla
import {statechart, Statechart} from 'overmind-statechart';
import {state} from './state';
import * as actions from './actions';
import {gql} from '../effects/gql';

// const config = {
//   state: auth.create({
//     current: 'AUTENTICANDO',
//   }),
//   actions,
// };

// export default config;

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
      },
    },
    AUTENTICANDO: {
      on: {
        fullLoging: 'AUTENTICADO',
      },
    },
    AUTENTICADO: {
      on: {
        logOut: 'INGRESAR',
      },
    },
    NO_AUTENTICADO: {
      on: {
        tryAgain: 'INGRESAR',
      },
    },
  },
};

export default statechart(config, loginChart);
