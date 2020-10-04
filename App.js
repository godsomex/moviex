import React from 'react';
import styled, {css} from '@emotion/native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Categories from './screens/Categories';
import MovieList from './screens/MovieList';

const App = () => {
  const RootStack = createStackNavigator();

  return (
    <>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name="Category" component={Categories} />
          <RootStack.Screen name="MovieList" component={MovieList} />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
