'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
} = React;
var Button = require('./Button');
  
var Toolbar = React.createClass({
  render() {
    return (
      <View>
        <View style={styles.toolbar}>
          <Button onPress={() => console.log('Settings')} style={styles.toolbarButton} label="Settings" />
          <Text style={styles.toolbarTitle}>Piggy Bank</Text>
          <Button onPress={() => console.log('Add')} style={styles.toolbarButton} label="Add" />
        </View>
      </View>
    );
  }
});
  
var styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#81c04d',
        paddingTop: 30,
        paddingBottom: 10,
        flexDirection: 'row'
    },
    toolbarButton: {
        width: 60,
        color: '#fff',
        textAlign: 'center'
    },
    toolbarTitle: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        flex: 1
    }
});

module.exports = Toolbar;
