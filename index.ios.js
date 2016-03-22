'use strict';
import React, {
  AppRegistry,
  Component,
  View
} from 'react-native';
import ChildSelector from './ChildSelector';
import Create from './Create';
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
        var buttons = [{label: 'Settings', view: 'settings'}, {label: 'Add', view: 'add'}];
        return (
          <View>
            <Toolbar buttons={buttons} title="Piggy Bank" onChangeView={this.changeView} />
            <ChildSelector currentChild={this.state.currentChild} onPageChange={this.changePage} {...this.data} />
            <TransactionList currentChild={this.state.currentChild} {...this.data} />
          </View>
        );
      case 'add':
        return <Create onChangeView={this.changeView} />
      case 'settings':
        var buttons = [{label: 'Cancel', view: 'list'}, {label: 'Save', view: 'list'}];
        return (
          <View>
            <Toolbar buttons={buttons} title="Settings" onChangeView={this.changeView} />
          </View>
        );
    }
  },
  render() {
    return this.renderView()
  }
});

AppRegistry.registerComponent('PiggyBank', () => PiggyBank);
