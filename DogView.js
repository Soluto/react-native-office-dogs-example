import React from 'react';
import {
 StyleSheet,
 Image,
 Text,
 View
} from 'react-native';

function RNDog (props)  {
  return (
    <View>
      <Text key={props.name}>{props.name}:{props.furColor}{"\n"}</Text>
      <Image source={{uri: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Hotdog_-_Evan_Swigart.jpg"}} style={{height: 200, width: 300}} />
   </View>
  )
};
// <Image source={{uri: imageUrl}} style={{height: 200, width: 300}} />
export default RNDog;
