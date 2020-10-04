import React from 'react';
import styled, {css} from '@emotion/native';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';
import Categories from './components/Categories';

const App = () => {
  return (
    <>
      <SafeAreaView>
        <Scroll contentInsetAdjustmentBehavior="automatic">
          <Container>
            <Title> Moviex App</Title>
            <Categories />
          </Container>
        </Scroll>
      </SafeAreaView>
    </>
  );
};

export default App;

const Container = styled.View`
  flex: 1;
  background-color: grey;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: blue;
`;

const Scroll = styled.ScrollView`
  backgroundcolor: Colors.lighter;
`;
