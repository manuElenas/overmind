import React from 'react';
import {Provider} from 'overmind-react';
import {createOvermind} from 'overmind';
import {config} from './src/overmind';
import HomeScreen from './src/screens/HomeScreen';
import AuthScreen from './src/screens/AuthScreen';

const overmind = createOvermind(config, {
  devtools: 'localhost:3031',
});
// const overmind = createOvermind(config);

const App = () => {
  return (
    <Provider value={overmind}>
      {/* <HomeScreen /> */}
      <AuthScreen />
    </Provider>
  );
};

export default App;
