/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useAction, useAppState} from '../overmind';
import {Result} from '../interfaces/RickAndMorty';
import CModal from '../component/CModal';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/StackNavigation';

interface Props {
  item: Result;
}

interface PropsScreen extends StackScreenProps<RootStackParams, 'HomeScreen'> {}

const HomeScreen = ({navigation}: PropsScreen) => {
  const {
    nextPages,
    getPerson,
    getCharacters,
    stateModal,
    auth: {logOut},
  } = useAction();
  const {
    data,
    isLoading,
    auth: {states},
  } = useAppState();
  const topRef = useRef<any>();
  const [num, setNum] = useState(2);

  useEffect(() => {
    getCharacters();
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
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          getPerson(item.id);
          stateModal(true);
        }}>
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
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <Button
          title="Salir"
          onPress={() => {
            logOut();
            navigation.navigate('AuthScreen');
          }}
        />
        <Text
          style={{
            textAlign: 'center',
            marginTop: 5,
            color: '#fff',
            fontSize: 15,
          }}>
          {`Estado Actual \n ${states[0][1]}`}
        </Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item: Result) => item.id.toString()}
          ref={topRef}
        />
        <CModal />
        {/* <View style={styles.contentButtons}> */}
        {/* {num !== 2 && (
            <Button
              title="Anterior"
              onPress={() => {
                if (num <= 42) {
                  nextPages(num);
                  topRef.current.scrollToIndex({index: 0, animated: true});
                  setNum(num + 1);
                } else {
                  // setNum(1);
                  // nextPages(num);
                  topRef.current.scrollToIndex({index: 0, animated: true});
                }
              }}
            />
          )} */}
        <Button
          title="Siguiente página"
          onPress={() => {
            if (num <= 42) {
              nextPages(num);
              topRef.current.scrollToIndex({index: 0, animated: true});
              setNum(num + 1);
            } else {
              // setNum(1);
              // nextPages(num);
              topRef.current.scrollToIndex({index: 0, animated: true});
            }
          }}
        />
      </View>
      {/* </View> */}
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
  contentButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
  },
});
