import React, {
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Avatar from './Avatar';

var TransactionItem = React.createClass({
  uri(name) {
    return this.props.allChildren.find(c => c.name == name).avatar_uri;
  },
  render() {
    let amount = this.props.amount;
    let currencyStyle = amount > 0 ? styles.positive : styles.negative;
    return (
      <View style={styles.container}>
        {this.props.children.map(c => <Avatar key={c} uri={this.uri(c)} name={c} size="small" />)}
        <Text style={styles.description}>{this.props.description}</Text>
        <Text style={currencyStyle}>{amount}</Text>
        <Text style={currencyStyle}>{this.props.currency}</Text>
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
  positive: {
    textAlign: 'right',
    fontSize: 16,
    fontFamily: 'Avenir Next',
    padding: 4,
  },
  negative: {
    textAlign: 'right',
    fontSize: 16,
    fontFamily: 'Avenir Next',
    padding: 4,
    color: '#f00'
  }
});

module.exports = TransactionItem;
