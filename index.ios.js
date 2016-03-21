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

class PiggyBank extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ChildSelector />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

AppRegistry.registerComponent('PiggyBank', () => PiggyBank);
