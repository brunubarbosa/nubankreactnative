import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, Animated} from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  Title,
  Description,
  CardFooter,
  Annotation,
  HeaderText,
} from './styles';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';

const App = () => {

  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
  );
console.log(animatedEvent)
  const onHandlerStateChanged = (event) => {

  }

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#939" />
      <Container>
        <Header />
        <Content>
          <Menu/>
          <PanGestureHandler
            onGestureEvent={animatedEvent}
            onHandlerStateChange={onHandlerStateChanged}>
            <Card
              style={{
                transform: [{
                  translateY,
                }]
              }}
            >
              <CardHeader>
                <Icon name="credit-card" size={28} color="#666" />
                <HeaderText>Cartão de crédito</HeaderText>
              </CardHeader>
              <CardContent>
                <Title>Saldo disponível</Title>
                <Description>R$ 197.611,65</Description>
              </CardContent>
              <CardFooter>
                <Icon name="attach-money" size={35} color="#666" />
                <Annotation>
                  Transferência de R$ 20,00 recebida de Diego Schell Fernandes hoje às 06:00h
                </Annotation>
              </CardFooter>
            </Card>
          </PanGestureHandler>
        </Content>
        <Tabs />
      </Container>
    </NavigationContainer>
  );
};

export default App;
