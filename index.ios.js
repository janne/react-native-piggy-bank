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
  getInitialState() {
    return {
      active: "Vilgot"
    }
  },
  data: {
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
      { description: 'From grandma', amount: 370, currency: 'kr', children: ["Vilgot"] },
      { description: 'Easter gift', amount: 100, currency: 'kr', children: ["Vilgot", "Elze"] },
      { description: 'Toys', amount: -20, currency: 'kr', children: ["Elze"] },
    ]
  },
  changePage(page) {
    this.setState({active: this.data.children[page].name});
  },
  render() {
    return (
      <View style={styles.container}>
        <Toolbar />
        <ChildSelector onPageChange={this.changePage} {...this.data} />
        <TransactionList active={this.state.active} {...this.data} />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
  },
});

AppRegistry.registerComponent('PiggyBank', () => PiggyBank);
