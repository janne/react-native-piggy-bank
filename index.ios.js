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
    let data =
      {
        children: [
          {
            name: "Vilgot",
            avatar_uri: "https://www.dropbox.com/s/r11h9vz2t9i7mwk/vilgot.png?dl=1",
          },
          {
            name: "Elze",
            avatar_uri: "https://www.dropbox.com/s/xbb8vnrof51zzxj/elze.png?dl=1",
          },
        ],
        transactions: [
          { description: 'From grandma', amount: '370', currency: 'SEK', children: ["vilgot"] },
          { description: 'Easter gift', amount: '20', currency: 'USD', children: ["vilgot", "elze"] },
          { description: 'Toys', amount: '-20', currency: 'SEK', children: ["elze"] },
        ]
      };
    return (
      <View style={styles.container}>
        <Toolbar />
        <ChildSelector {...data} />
        <TransactionList {...data} />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
  },
});

AppRegistry.registerComponent('PiggyBank', () => PiggyBank);
