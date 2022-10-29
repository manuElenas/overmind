import {Modal, Button, View, Image, Text} from 'react-native';
import React from 'react';
import {useAction, useAppState} from '../overmind';

const CModal = () => {
  const {modal, dataModal} = useAppState();
  const {stateModal} = useAction();
  return (
    <>
      <Modal visible={modal} animationType="slide">
        <Button title="Cerrar Modal" onPress={() => stateModal(false)} />
        <View>
          <Text>{dataModal.name}</Text>
          <Image source={{uri: dataModal.image}} />
        </View>
      </Modal>
    </>
  );
};

export default CModal;
