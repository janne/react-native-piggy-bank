import React, {
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import TransactionItem from './TransactionItem';

var TransactionList = React.createClass({
  getInitialState() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  },
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <TransactionItem data={rowData} />}
      />
    );
  }
});

module.exports = TransactionList;
