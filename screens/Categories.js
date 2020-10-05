import React from 'react';
import {useSelector} from 'react-redux';
import styled, {css} from '@emotion/native';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import {categoryColor, transformCategory} from '../utilities';

function Categories({navigation}) {
  const movies = useSelector((state) => state.movie);
  const category = transformCategory(movies.categories, categoryColor);

  return (
    <Container>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={category}
        horizontal={false}
        numColumns={2}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('MovieList', {
                  id: item.id,
                  title: item.title,
                })
              }
              style={[styles.card, {backgroundColor: item.color}]}>
              <View style={styles.cardHeader}>
                <Text style={styles.title}>{item.title}</Text>
                <Image
                  style={styles.icon}
                  source={{
                    uri:
                      'https://img.icons8.com/android/24/000000/film-reel.png',
                  }}
                />
              </View>
              <Image style={styles.cardImage} source={{uri: item.image}} />
              <View style={styles.cardFooter}>
                <Text style={styles.subTitle}>{item.favorites} favorites</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </Container>
  );
}

export default Categories;

const Container = styled.View`
  flex: 1;
  margin-top: 20px;
`;

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#E6E6E6',
  },
  listContainer: {
    alignItems: 'center',
  },
  card: {
    marginHorizontal: 2,
    marginVertical: 2,
    flexBasis: '48%',
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    height: 70,
    width: 70,
    alignSelf: 'center',
  },
  title: {
    fontSize: 16,
    flex: 1,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 12,
    flex: 1,
    color: '#FFFFFF',
  },
  icon: {
    height: 20,
    width: 20,
  },
});
