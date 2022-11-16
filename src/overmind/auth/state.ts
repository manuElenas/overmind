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
      current: 'NOAUTENTICADO';
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
      current: 'NOAUTENTICANDO';
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
  NOAUTENTICANDO: {
    SIGNING_IN: () => ({current: 'AUTENTICANDO'}),
  },
  AUTENTICANDO: {
    SIGNED_IN: user => ({current: 'AUTENTICADO', user}),
  },
  AUTENTICADO: {
    SIGNED_OUT: signedOutReason => ({
      current: 'NOAUTENTICANDO',
      signedOutReason,
    }),
  },
});
