import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainTabNavigator from './routes/homeNavigator';



export default function App() {
  
  return (
      <MainTabNavigator />
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
