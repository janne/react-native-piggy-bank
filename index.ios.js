'use strict';
import React, {
  AppRegistry,
  Component,
  View
} from 'react-native';
import ChildSelector from './ChildSelector';
import Toolbar from './Toolbar';
import TransactionList from './TransactionList';

var PiggyBank = React.createClass({
  data: require('./fixtures/data.json'),
  getInitialState() {
    return { active: "Vilgot" }
  },
  changePage(page) {
    this.setState({active: this.data.children[page].name});
  },
  render() {
    return (
      <View>
        <Toolbar />
        <ChildSelector onPageChange={this.changePage} {...this.data} />
        <TransactionList active={this.state.active} {...this.data} />
      </View>
    );
  }
});

AppRegistry.registerComponent('PiggyBank', () => PiggyBank);
