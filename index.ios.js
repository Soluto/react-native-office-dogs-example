'use strict';

import React from 'react';
import {
 AppRegistry,
 StyleSheet,
 Image,
 Text,
 View
} from 'react-native';

import Dog from './DogView.js'

class DoggyView extends React.Component {
 render() {
   return (
     <View style={styles.container}>
       <Text style={styles.dogsTitle}>
         Dogs!
       </Text>
       <View>
       <Dog dog={this.props} />
      </View>
     </View>
   );
 }
}

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
