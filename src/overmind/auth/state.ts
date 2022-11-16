// import {statemachine} from 'overmind';
//ESTATE MACHINE
import {statemachine} from 'overmind';

type State =
  | {
      current: 'AUTENTICANDO';
    }
  | {
      current: 'AUTENTICADO';
      user: string;
    }
  | {
      current: 'NO_AUTENTICADO';
      signedOutReason: string;
    };

export const state: State = {
  current: 'AUTENTICANDO',
};

// ----------------------------------------------- //

//type User = {username: string};

type States =
  | {
      current: 'AUTENTICANDO';
    }
  | {
      current: 'AUTENTICADO';
      user: string;
    }
  | {
      current: 'NO_AUTENTICADO';
      signedOutReason: string;
    };

type Events =
  | {
      type: 'SIGNING_IN';
    }
  | {
      type: 'SIGNED_IN';
      data: string;
    }
  | {
      type: 'SIGNED_OUT';
      data: string;
    };

export const auth = statemachine<States, Events>({
  NO_AUTENTICADO: {
    SIGNING_IN: () => ({current: 'AUTENTICANDO'}),
  },
  AUTENTICADO: {
    SIGNED_IN: user => ({current: 'AUTENTICADO', user}),
  },
  AUTENTICANDO: {
    SIGNED_OUT: signedOutReason => ({
      current: 'NO_AUTENTICADO',
      signedOutReason,
    }),
  },
});
