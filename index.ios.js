/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
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

class PiggyBank extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Toolbar />
        <ChildSelector />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});

AppRegistry.registerComponent('PiggyBank', () => PiggyBank);
