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
      { description: 'From piggybank', amount: 373, currency: 'kr', children: ['Vilgot'] },
      { description: 'From piggybank', amount: 5, currency: 'kr', children: ['Elze'] },
      { description: 'From aunt Emilia', amount: 530, currency: 'kr', children: ['Vilgot', 'Elze'] },
      { description: 'Nerf', amount: -170, currency: 'kr', children: ['Vilgot'] },
      { description: 'Lego to Theo', amount: 200, currency: 'kr', children: ['Vilgot'] },
      { description: 'Tooth Fairy', amount: 20, currency: 'kr', children: ['Vilgot'] },
      { description: 'Turtle', amount: -35, currency: 'kr', children: ['Elze'] },
      { description: 'Kitty keyring', amount: -49, currency: 'kr', children: ['Elze'] },
      { description: 'Crown, drawing pad, pearls', amount: -138, currency: 'kr', children: ['Elze'] },
      { description: 'Easter Gift', amount: 50, currency: 'kr', children: ['Vilgot', 'Elze'] },
      { description: 'Birthday', amount: 500, currency: 'kr', children: ['Vilgot'] },
      { description: 'Gift from Severina', amount: 472, currency: 'kr', children: ['Vilgot', 'Elze'] },
      { description: 'Gift from Povilas', amount: 377, currency: 'kr', children: ['Vilgot', 'Elze'] },
      { description: 'Candy', amount: -28, currency: 'kr', children: ['Vilgot'] },
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
