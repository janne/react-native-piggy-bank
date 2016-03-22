import React, { View, Text, StyleSheet } from 'react-native';

const FormItem = React.createClass({
  render() {
    var style = [styles.row];
    if (this.props.grow) {
      style.push(styles.grow);
    }
    return (
      <View style={style}>
        <Text style={styles.label}>{this.props.label}:</Text>
        <Text style={styles.value}>{this.props.value}</Text>
        { this.props.unit ? <Text style={styles.unit}>{this.props.unit}</Text> : false }
      </View>
    );
  },
});

const styles = StyleSheet.create({
  grow: {
    height: 475,
  },
  row: {
    flexDirection: 'row',
    padding: 8,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  label: {
    fontSize: 20,
    marginRight: 20,
    fontFamily: 'Avenir Next',
    color: '#999',
  },
  value: {
    fontSize: 20,
    fontFamily: 'Avenir Next',
    flex: 1,
  },
  unit: {
    fontSize: 20,
    color: '#999',
    marginRight: 20,
    fontFamily: 'Avenir Next',
  },
});

module.exports = FormItem;
