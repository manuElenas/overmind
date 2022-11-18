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
    LOGIN: void;
    AUTHENTICATING: void;
    AUTHENTICATED: void;
    ERROR: void;
  }
> = {
  initial: 'LOGIN',
  states: {
    LOGIN: {
      on: {
        loginUser: 'AUTHENTICATING',
      },
    },
    AUTHENTICATING: {
      on: {
        fullLoging: 'AUTHENTICATED',
      },
    },
    AUTHENTICATED: {
      on: {
        logOut: 'LOGIN',
      },
    },
    ERROR: {
      on: {
        // tryAgain: 'LOGIN',
      },
    },
  },
};

export default statechart(config, loginChart);
