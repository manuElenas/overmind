// import {IAction} from 'overmind';
import {Context} from '..';

export const loginUser = async (
  {state, actions}: Context,
  {username, password}: {username: string; password: string},
): Promise<void> => {
  if (username && password) {
    state.auth.username = username;
    state.auth.password = password;
    actions.auth.fullLoging();
  } else {
    actions.auth.logOut();
  }
};

export const logOut = () => {};

export const fullLoging = () => {};
