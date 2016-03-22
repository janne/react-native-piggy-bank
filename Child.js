import React, { View, Text, StyleSheet } from 'react-native';
import Avatar from './Avatar';

const Child = React.createClass({
  render() {
    return (
      <View style={styles.page}>
      <Text style={styles.title}>{this.props.name}</Text>
      <Avatar uri={this.props.avatar_uri} name={this.props.name} size="large" />
      <Text style={styles.amount}>{this.props.sum} kr</Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    width: 400,
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

module.exports = Child;
