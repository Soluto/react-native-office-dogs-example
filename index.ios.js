import React from 'react';
import {
 AppRegistry,
 StyleSheet,
 Image,
 Text,
 View
} from 'react-native';



const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
 },
 dogsTitle: {
   fontSize: 20,
   textAlign: 'center',
   margin: 10,
 },
});

// Module name
AppRegistry.registerComponent('DoggyView', () => DoggyView);
