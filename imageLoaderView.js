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
      urlToLoad: props.imageUrl
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
      this.setState({imageUrl: this.state.urlToLoad});
    }.bind(this), 5000)

  }
}

export default ImageLoaderView;
