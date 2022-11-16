import {IAction} from 'overmind';
import {Context} from '..';

export const success: IAction<string, void> = ({state}: Context, user) => {
  state.auth.send('SIGNED_IN', user);
};

export const logOut = ({state}: Context) => {
  state.auth.send('SIGNED_OUT');
};
