/* eslint-disable react-native/no-inline-styles */
import {
  Modal,
  Button,
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useAction, useAppState} from '../overmind';

const width = Dimensions.get('window').width / 1.1;

const CModal = () => {
  const {modal, dataModal} = useAppState();
  const {stateModal} = useAction();
  return (
    <Modal visible={modal} animationType="slide">
      <Button title="Cerrar Modal" onPress={() => stateModal(false)} />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Image source={{uri: dataModal.image}} style={styles.imagenModal} />
            <View style={styles.containetText}>
              <Text style={styles.generalText}>{dataModal.name}</Text>
              <Text style={{...styles.generalText, fontSize: 25}}>
                {dataModal.status} - {dataModal.species}
              </Text>
              <Text style={{...styles.generalText, fontSize: 20}}>
                {dataModal.gender}
              </Text>
              <Text style={{...styles.generalText, fontSize: 20}}>
                Episodes:
              </Text>
              {dataModal.episode.map((item, index) => (
                <Text
                  key={index}
                  style={{...styles.generalText, fontSize: 12, color: 'black'}}>
                  Name: {item.name}
                </Text>
              ))}
              <View style={styles.viewSpace} />
            </View>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default CModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
  },
  imagenModal: {
    width,
    height: 300,
    marginTop: 20,
    borderRadius: 10,
  },
  containetText: {
    marginLeft: 10,
    flexShrink: 1,
    flexGrow: 1,
  },
  generalText: {
    fontSize: 40,
    color: 'white',
  },
  viewSpace: {
    margin: 10,
  },
});
