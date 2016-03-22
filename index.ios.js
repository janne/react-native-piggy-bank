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
    return {
      view: "list",
      currentChild: 0,
    }
  },
  changeView(view) {
    this.setState({view});
  },
  changePage(page) {
    this.setState({currentChild: page});
  },
  renderView() {
    switch(this.state.view) {
      case 'list':
        return (
          <View>
            <Toolbar onChangeView={this.changeView} />
            <ChildSelector currentChild={this.state.currentChild} onPageChange={this.changePage} {...this.data} />
            <TransactionList currentChild={this.state.currentChild} {...this.data} />
          </View>
        );
      case 'add':
        return (
          <View>
            <Toolbar onChangeView={this.changeView} />
          </View>
        );
      case 'settings':
        return (
          <View>
            <Toolbar onChangeView={this.changeView} />
          </View>
        );
    }
  },
  render() {
    return this.renderView()
  }
});

AppRegistry.registerComponent('PiggyBank', () => PiggyBank);
