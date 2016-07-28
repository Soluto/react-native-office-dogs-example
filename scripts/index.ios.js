'use strict';

import React from 'react';
import {
 AppRegistry,
 StyleSheet,
 Image,
 Text,
 View
} from 'react-native';

class DoggyView extends React.Component {
 render() {
   const {name, furColor, breed} = this.props;
   return (
     <View style={styles.container}>
       <Text style={styles.dogsTitle}>
         Dogs!
       </Text>
       <View>
         <Text key={name}>{name}:{breed}:{furColor}{"\n"}</Text>
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
