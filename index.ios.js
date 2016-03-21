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
import Transactions from './Transactions';

var PiggyBank = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Toolbar />
        <ChildSelector />
        <Transactions />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
  },
});

AppRegistry.registerComponent('PiggyBank', () => PiggyBank);
