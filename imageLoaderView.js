import React from 'react';
import {
 AppRegistry,
 StyleSheet,
 Image,
 Text,
 View,
 ActivityIndicator,
} from 'react-native';

class ImageLoaderView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      keyword: props.keyword
    };
  }
  render() {
    if (this.state.imageUrl) {
      return <Image source={{uri: this.state.imageUrl}} style={{height: 200, width: 300}} />;
    }
    return (
      <ActivityIndicator animating={true} size="large" />
    );
  }

  componentDidMount() {
    setTimeout(function() {
      this.setState({imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Hotdog_-_Evan_Swigart.jpg"});
    }.bind(this), 5000)

  }
}

export default ImageLoaderView;
