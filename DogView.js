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
      <Text key={props.dog.name}>{props.dog.name}:{props.dog.furColor}{"\n"}</Text>
      <ImageLoaderView imageUrl={props.dog.imageUrl}/>
   </View>
  )
};
export default RNDog;
