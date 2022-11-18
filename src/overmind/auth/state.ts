type State = {
  username: string;
  password: string;
  user: string | null;
  authenticationError: string | null;
  // states: [[string, string]];
  // actions: {
  //   changeUsername: boolean;
  //   changePassword: boolean;
  //   login: boolean;
  //   logout: boolean;
  //   tryAgain: boolean;
  // };
};

export const state: State = {
  username: '',
  password: '',
  user: null,
  authenticationError: null,
  // states: [['CHART', 'LOGIN']],
  // actions: {
  //   changeUsername: true,
  //   changePassword: true,
  //   login: false,
  //   logout: false,
  //   tryAgain: false,
  // },
};
