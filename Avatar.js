import React, { Image, StyleSheet } from 'react-native';

var Avatar = React.createClass({
  avatar() {
    var elze = "https://www.dropbox.com/s/xbb8vnrof51zzxj/elze.png?dl=1"
    var vilgot = "https://www.dropbox.com/s/r11h9vz2t9i7mwk/vilgot.png?dl=1"
    if (this.props.name == 'vilgot') {
      return {uri:vilgot}
    } else {
      return {uri:elze}
    }
  },
  render() {
    return (
      <Image source={this.avatar()} style={styles[this.props.size]} />
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
