'use strict';
var React = require('react-native');
var { View, StyleSheet, Text } = React;

var ChildSelector = React.createClass({
  render() {
    return (
      <View>
        <Text style={styles.container}>Alla barn</Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
  }
});

module.exports = ChildSelector;
