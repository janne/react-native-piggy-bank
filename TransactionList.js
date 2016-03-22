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
    let transactions = this.props.transactions.filter(t => t.children.indexOf(this.props.active) > -1)
    return (
      <ListView
        dataSource={this.dataSource.cloneWithRows(transactions)}
        renderRow={(rowData) => <TransactionItem {...rowData} />}
      />
    );
  }
});

module.exports = TransactionList;
