import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {movieList} from '../utilities/index';

function MovieList(props) {
  const [state] = useState(movieList);
  const [searchterm, setSearchterm] = useState('');
  const genreId = props.route.params.id;

  const clickEventListener = (term) => {
    Alert.alert('Alert', 'Button pressed ' + genreId + term);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContent}>
        <View style={styles.inputContainer}>
          <Image
            style={[styles.icon, styles.inputIcon]}
            source={{
              uri: 'https://img.icons8.com/search/androidL/100/2ecc71',
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Search"
            underlineColorAndroid="transparent"
            onChangeText={(text) => setSearchterm(text)}
            value={searchterm}
          />
        </View>

        <TouchableHighlight
          style={styles.saveButton}
          onPress={() => clickEventListener(searchterm)}>
          <Image
            style={[styles.icon, styles.iconBtnSearch]}
            source={{
              uri: 'https://img.icons8.com/search/androidL/100/ffffff',
            }}
          />
        </TouchableHighlight>
      </View>

      <FlatList
        style={styles.notificationList}
        enableEmptySections={true}
        data={state.results}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('MovieDetails', {
                  item,
                })
              }
              style={[styles.card, {backgroundColor: item.color}]}>
              <View style={styles.notificationBox}>
                <Image
                  style={styles.image}
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                  }}
                />

                <Text style={styles.description}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

export default MovieList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
  formContent: {
    flexDirection: 'row',
    marginTop: 30,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    margin: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  iconBtnSearch: {
    alignSelf: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  saveButton: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: 70,
    alignSelf: 'flex-end',
    backgroundColor: '#40E0D0',
    borderRadius: 30,
  },
  saveButtonText: {
    color: 'white',
  },
  notificationList: {
    marginTop: 20,
    padding: 10,
  },
  notificationBox: {
    padding: 20,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius: 10,
  },
  image: {
    width: 45,
    height: 45,
  },
  description: {
    fontSize: 18,
    color: '#3498db',
    marginLeft: 10,
  },
});
