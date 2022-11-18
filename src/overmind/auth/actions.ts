// import {IAction} from 'overmind';
import {Context} from '..';

export const loginUser = async (
  {state, actions}: Context,
  {username, password}: {username: string; password: string},
) => {
  if (username && password) {
    state.auth.username = username;
    state.auth.password = password;
    await new Promise((resolve: any) => setTimeout(resolve, 1000));
    actions.auth.fullLoging();
  } else {
    await new Promise((resolve: any) => setTimeout(resolve, 1000));
  }
};

export const tryAgain = () => {};

export const logOut = (): void => {};

export const fullLoging = (): void => {};
