import React from 'react';
import {
 StyleSheet,
 Image,
 Text,
 View
} from 'react-native';
import ImageLoaderView from "./imageLoaderView.js"
function RNDog (props)  {
  return (
    <View>
      <Text key={props.name}>{props.name}:{props.furColor}{"\n"}</Text>
      <ImageLoaderView keyword={props.breed}/>
   </View>
  )
};
export default RNDog;
