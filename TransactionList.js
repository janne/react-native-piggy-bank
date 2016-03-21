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
    var data = [
      { description: 'From grandma', amount: '370', currency: 'SEK' },
      { description: 'Easter gift', amount: '20', currency: 'USD' },
      { description: 'Toys', amount: '-20', currency: 'SEK' }
    ];
    return {
      dataSource: ds.cloneWithRows(data),
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
