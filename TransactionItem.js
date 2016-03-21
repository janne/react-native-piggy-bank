import React, {
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

var TransactionItem = React.createClass({
  render() {
    return (
      <View style={styles.container}>
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
  },
  amount: {
    textAlign: 'right',
    fontSize: 16,
  }
});

module.exports = TransactionItem;
