//contiene informacion sobre el estado, acciones y efecto
import {IContext} from 'overmind';
import {
  createStateHook,
  createActionsHook,
  createEffectsHook,
} from 'overmind-react';
import {onInitialize} from './effects/gql/onInitialize';
import {gql} from './effects/gql';
import {state} from './state';
import * as actions from './actions';

export const config = {
  state,
  onInitialize,
  actions,
  effects: {
    gql,
  },
};

export type Context = IContext<typeof config>;

export const useAppState = createStateHook<Context>();
export const useAction = createActionsHook<Context>();
export const useAppEffects = createEffectsHook<Context>();
