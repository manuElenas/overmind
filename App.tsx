import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'overmind-react';
import {createOvermind} from 'overmind';
import {config} from './src/overmind';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';

const overmind = createOvermind(config, {
  devtools: '192.168.1.4:3031',
});
// const overmind = createOvermind(config);

const App = () => {
  return (
    <NavigationContainer>
      <Provider value={overmind}>
        <StackNavigation />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
