import {View, StyleSheet, TextInput, KeyboardTypeOptions} from 'react-native';
import React from 'react';

interface Props {
  placeHolder: string;
  keyboardType?: KeyboardTypeOptions;
}

const Input = ({placeHolder, keyboardType = 'default'}: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputContainer}
        placeholder={placeHolder}
        keyboardType={keyboardType}
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
