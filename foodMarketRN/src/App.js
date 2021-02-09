import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  ScrollView, StyleSheet, View
} from 'react-native';
import {SignIn, SplashScreen} from './pages';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router'

const App = ()  => {
  return (
    <NavigationContainer>
      <Router /> 
    </NavigationContainer>
  )
};

const styles = StyleSheet.create({
  
});

export default App;
