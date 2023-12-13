import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import COLORS from './src/consts/colors';
import DetailsScreen from './src/views/screens/DetailsScreen';
import BottomNavigator from './src/views/navigation/BottomNavigator';
import OnBoardScreen from './src/views/screens/OnBoardScreen';
import { CartProvider } from './src/views/components/CartContext';
import RestaurantScreen from './src/views/screens/RestaurantInfoScreen';
import { AppRegistry } from 'react-native';

const Stack = createStackNavigator();


const App = () => {

  return (
    <CartProvider>
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="BoardScreen" component={OnBoardScreen} />
        <Stack.Screen name="Home" component={BottomNavigator} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="RestaurantScreen" component={RestaurantScreen}/>
     
       
      </Stack.Navigator>
    </NavigationContainer>
    </CartProvider>
  );

};


export default App;
