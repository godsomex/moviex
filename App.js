import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';

import Categories from './screens/Categories';
import MovieList from './screens/MovieList';
import MovieDetails from './screens/MovieDetails';
import configureStore from './redux/configureStore';

const App = () => {
  const store = configureStore();
  const RootStack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name="Category" component={Categories} />
          <RootStack.Screen name="MovieList" component={MovieList} />
          <RootStack.Screen name="MovieDetails" component={MovieDetails} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
