/* eslint-disable react-native/no-inline-styles */
import {View, StyleSheet, Text, Button} from 'react-native';
import React, {useState} from 'react';
import Input from '../component/Input';
import {useAction, useAppState} from '../overmind';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/StackNavigation';

interface Props extends StackScreenProps<RootStackParams, 'AuthScreen'> {}

const AuthScreen = ({navigation}: Props) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const {
    auth: {loginUser},
  } = useAction();

  const {
    auth: {states},
  } = useAppState();

  const handleUserName = (text: string) => {
    setUserName(text);
  };

  const handlePassword = (text: string) => {
    setPassword(text);
  };

  return (
    <View style={styles.container}>
      <Text
        style={styles.containerText}>{`Estado Actual \n ${states[0][1]}`}</Text>
      <Input
        placeHolder="Usuario"
        handleUser={(text: string) => handleUserName(text)}
        value={username}
      />
      <Input
        placeHolder="Contraseña"
        handleUser={(text: string) => handlePassword(text)}
        value={password}
      />
      <View style={styles.containerButton}>
        <Button
          title="Entrar"
          onPress={() => {
            loginUser({username, password});
            navigation.navigate('HomeScreen');
          }}
        />
      </View>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
  },
  containerText: {
    textAlign: 'center',
    fontSize: 30,
    color: '#fff',
  },
  containerButton: {
    alignItems: 'center',
    marginTop: 15,
  },
});
