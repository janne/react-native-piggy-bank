'use strict';
import React, {
  AppRegistry,
  Component,
  View
} from 'react-native';
import ChildSelector from './ChildSelector';
import Toolbar from './Toolbar';
import TransactionList from './TransactionList';
const data = require('./fixtures/data.json');

var PiggyBank = React.createClass({
  data: data,
  getInitialState() {
    return { currentChild: data.children[0].name }
  },
  changePage(page) {
    this.setState({currentChild: this.data.children[page].name});
  },
  render() {
    return (
      <View>
        <Toolbar />
        <ChildSelector onPageChange={this.changePage} {...this.data} />
        <TransactionList currentChild={this.state.currentChild} {...this.data} />
      </View>
    );
  }
});

AppRegistry.registerComponent('PiggyBank', () => PiggyBank);
