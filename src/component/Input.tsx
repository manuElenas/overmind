import {View, StyleSheet, TextInput, KeyboardTypeOptions} from 'react-native';
import React from 'react';

interface Props {
  placeHolder: string;
  keyboardType?: KeyboardTypeOptions;
  handleUser: (text: string) => void;
  value: string;
}

const Input = ({
  value,
  placeHolder,
  keyboardType = 'default',
  handleUser,
}: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputContainer}
        placeholder={placeHolder}
        keyboardType={keyboardType}
        onChangeText={handleUser}
        value={value}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#000',
    marginHorizontal: 15,
    borderRadius: 10,
    fontSize: 20,
    paddingLeft: 20,
    backgroundColor: '#fff',
  },
});
