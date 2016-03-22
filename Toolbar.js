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
          <Button onPress={() => this.props.onChangeView("settings")} style={styles.toolbarButton} label="Settings" />
          <Text style={styles.toolbarTitle}>Piggy Bank</Text>
          <Button onPress={() => this.props.onChangeView("add")} style={styles.toolbarButton} label="Add" />
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
        textAlign: 'center',
        fontFamily: 'Avenir Next',
    },
    toolbarTitle: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        flex: 1,
        fontFamily: 'Avenir Next',
    }
});

module.exports = Toolbar;
