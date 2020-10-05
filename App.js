import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Categories from './screens/Categories';
import MovieList from './screens/MovieList';
import MovieDetails from './screens/MovieDetails';

const App = () => {
  const RootStack = createStackNavigator();

  return (
    <>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name="Category" component={Categories} />
          <RootStack.Screen name="MovieList" component={MovieList} />
          <RootStack.Screen name="MovieDetails" component={MovieDetails} />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
