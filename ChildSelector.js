'use strict';
import React, { View, StyleSheet, Text } from 'react-native';
import Avatar from './Avatar';

var ChildSelector = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Vilgot</Text>
        <Avatar name="vilgot" size="large" />
        <Text style={styles.amount}>345 SEK</Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Avenir Next',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 20,
    fontFamily: 'Avenir Next',
    textAlign: 'center',
    fontWeight: 'bold',
  }
});

module.exports = ChildSelector;
