//contiene informacion sobre el estado, acciones y efecto
import {IContext} from 'overmind';
import {
  createStateHook,
  createActionsHook,
  createEffectsHook,
} from 'overmind-react';
import auth from './auth';
import {merge, namespaced} from 'overmind/config';
import {gql} from './effects/gql';
import {state} from './state';
import * as actions from './actions';

// export const config = {
//   state,
//   actions,
//   effects: {
//     gql,
//   },
// };

export const config = merge(
  {
    state,
    actions,
    effects: {
      gql,
    },
  },
  namespaced({
    auth,
  }),
);

export type Context = IContext<typeof config>;

export const useAppState = createStateHook<Context>();
export const useAction = createActionsHook<Context>();
export const useAppEffects = createEffectsHook<Context>();
