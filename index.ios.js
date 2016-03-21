'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ChildSelector from './ChildSelector';
import Toolbar from './Toolbar';
import TransactionList from './TransactionList';

var PiggyBank = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Toolbar />
        <ChildSelector />
        <TransactionList />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
  },
});

AppRegistry.registerComponent('PiggyBank', () => PiggyBank);
