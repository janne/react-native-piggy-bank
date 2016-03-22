import React, { Image, StyleSheet } from 'react-native';

var Avatar = React.createClass({
  render() {
    return (
      <Image source={{ uri: this.props.uri }} style={ styles[this.props.size] } />
    );
  }
});

var styles = StyleSheet.create({
  small: {
    width: 20,
    height: 20,
    margin: 4,
  },
  large: {
    width: 128,
    height: 128,
    margin: 4,
  }
});

module.exports = Avatar;
