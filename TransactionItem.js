import React, {
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Avatar from './Avatar';

var TransactionItem = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Avatar name="vilgot" size="small" />
        <Text style={styles.description}>foo</Text>
        <Text style={styles.amount}>10 SEK</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 4,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  description: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Avenir Next',
    padding: 4,
  },
  amount: {
    textAlign: 'right',
    fontSize: 16,
    fontFamily: 'Avenir Next',
    padding: 4,
  }
});

module.exports = TransactionItem;
