import {IAction} from 'overmind';
import {Context} from '..';

export const success: IAction<string, void> = ({state}: Context, user) => {
  if (user) {
    state.auth.send('SIGNED_IN', user);
  } else {
    state.auth.send('SIGNED_OUT');
  }
};
