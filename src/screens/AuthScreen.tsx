import {View, StyleSheet, Text, Button} from 'react-native';
import React from 'react';
import Input from '../component/Input';
import {useAction, useAppState} from '../overmind';

const AuthScreen = () => {
  const {
    auth: {success},
  } = useAction();

  const {
    auth: {current},
  } = useAppState();

  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>{current}</Text>
      <Text style={styles.containerText}>LogIn</Text>
      <Input placeHolder="Usuario" />
      <Input placeHolder="Contraseña" />
      <View style={styles.containerButton}>
        <Button title="Entrar" onPress={() => success('Manuel')} />
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
