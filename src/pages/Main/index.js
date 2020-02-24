import React from 'react';
import {StatusBar} from 'react-native';
import {Container} from './styles';
import Header from '../../components/Header/inde';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8B10AF" />
      <Container>
        <Header />
      </Container>
    </>
  );
};

export default App;
