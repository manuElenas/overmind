import React from 'react';
import {Provider} from 'overmind-react';
import {createOvermind} from 'overmind';
import {config} from './src/overmind';
import HomeScreen from './src/screens/HomeScreen';

// const overmind = createOvermind(config, {
//   devtools: 'localhost:3031',
// });
const overmind = createOvermind(config);

const App = () => {
  return (
    <Provider value={overmind}>
      <HomeScreen />
    </Provider>
  );
};

export default App;
