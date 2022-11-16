import {View, StyleSheet, Text, Button, Alert} from 'react-native';
import React from 'react';
import Input from '../component/Input';
import {useAction, useAppState} from '../overmind';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/StackNavigation';

interface Props extends StackScreenProps<RootStackParams, 'AuthScreen'> {}

const AuthScreen = ({navigation}: Props) => {
  const {
    auth: {success},
    handleUserName,
  } = useAction();

  const {
    auth: {current},
    userName,
  } = useAppState();

  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>{current}</Text>
      <Text style={styles.containerText}>LogIn</Text>
      <Input placeHolder="Usuario" handleUser={handleUserName} />
      {/* <Input placeHolder="Contraseña" /> */}
      <View style={styles.containerButton}>
        <Button
          title="Entrar"
          onPress={() => {
            if (userName) {
              success(userName);
              navigation.navigate('HomeScreen');
            } else {
              Alert.alert('Aviso', 'Por favor, autentiquese primero');
            }
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
