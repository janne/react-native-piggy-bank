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
      dataSource: ds.cloneWithRows(this.props.transactions),
    };
  },
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <TransactionItem {...rowData} />}
      />
    );
  }
});

module.exports = TransactionList;
