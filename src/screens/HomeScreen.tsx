/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {useAction, useAppState} from '../overmind';
import {Result} from '../interfaces/RickAndMorty';
import CModal from '../component/CModal';
//import useAPI from '../hooks/useAPI';

interface Props {
  item: Result;
}

const HomeScreen = () => {
  const {getData, stateModal, setDataModal} = useAction();
  const {data, isLoading} = useAppState();
  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return (
      <View style={{...styles.container, backgroundColor: 'black'}}>
        <ActivityIndicator color="white" size={100} />
      </View>
    );
  }

  const renderItem = ({item}: Props) => {
    return (
      <View style={styles.containerRender}>
        <Image source={{uri: item.image}} style={styles.imagenRender} />
        <View style={styles.containerText}>
          <Text style={styles.renderTitle}>{item.name}</Text>
          <Text style={{...styles.renderTitle, fontSize: 15}}>
            {item.status} - {item.species}
          </Text>
          <Text style={{...styles.renderTitle, fontSize: 12}}>
            {item.gender}
          </Text>
          <TouchableOpacity
            onPress={() => {
              setDataModal({
                id: item.id,
                name: item.name,
                image: item.image,
                status: item.status,
                species: item.species,
                gender: item.gender,
                episode: item.episode,
              });
              stateModal(true);
            }}>
            <View style={{marginTop: 10}} />
            <Text style={{color: 'blue'}}>More...</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item: Result) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
        {/* <Modal visible={modal} animationType="slide">
          <Button title="Cerrar Modal" onPress={() => stateModal(false)} />
          <View>
            <Image source={{uri: }}/>
          </View>
        </Modal> */}
        <CModal />
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  containerRender: {
    backgroundColor: 'white',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
  },
  imagenRender: {
    width: 150,
    height: 100,
  },
  containerText: {
    marginLeft: 10,
    flexShrink: 1,
    flexGrow: 1,
  },
  renderTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
});
