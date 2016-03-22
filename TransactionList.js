import React, {
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import TransactionItem from './TransactionItem';

var TransactionList = React.createClass({
  dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
  render() {
    let name = this.props.children[this.props.currentChild].name;
    let transactions = this.props.transactions.filter(t => t.children.indexOf(name) > -1)
    return (
      <ListView
        dataSource={this.dataSource.cloneWithRows(transactions)}
        renderRow={(rowData) => <TransactionItem allChildren={this.props.children} {...rowData} />}
      />
    );
  }
});

module.exports = TransactionList;
