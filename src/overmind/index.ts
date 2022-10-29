//contiene informacion sobre el estado, acciones y efecto
// overmind/inde
import {IContext} from 'overmind';
import {createStateHook, createActionsHook} from 'overmind-react';
import {state} from './state';
import * as actions from './actions';

export const config = {state, actions};

export type Context = IContext<typeof config>;

export const useAppState = createStateHook<Context>();
export const useAction = createActionsHook<Context>();
