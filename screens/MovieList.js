import React from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';

function MovieList(props) {
  const {title} = props.route.params;

  return <Text>{title}</Text>;
}

export default MovieList;
