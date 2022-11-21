// import {IAction} from 'overmind';
import {Context} from '..';

export const loginUser = async (
  {state, actions}: Context,
  {username, password}: {username: string; password: string},
) => {
  state.auth.username = username;
  state.auth.password = password;
  await new Promise((resolve: Function) => {
    setTimeout(() => {
      resolve(actions.auth.fullLoging());
    }, 1000);
  });
  // await new Promise((resolve: any) => setTimeout(resolve, 1000));
  // actions.auth.fullLoging();
};

export const logOut = ({state}: Context): void => {
  state.auth.username = '';
  state.auth.password = '';
};

export const tryAgain = () => {};

export const fullLoging = (): void => {};

export const noAuthentic = (): void => {};
