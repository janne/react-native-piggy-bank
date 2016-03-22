import React, { View, Text, DatePickerIOS, StyleSheet } from 'react-native';
import Toolbar from './Toolbar';
import FormItem from './FormItem';

const Create = React.createClass({
  handleDateChange() {
    //<DatePickerIOS onDateChange={this.handleDateChange} date={date} mode="date" />
  },
  render() {
      var buttons = [{label: 'Cancel', view: 'list'}];
      var date = new Date();
      return (
        <View>
          <Toolbar buttons={buttons} title="Make transaction" onChangeView={this.props.onChangeView} />
          <FormItem label="Date" value={date.toLocaleDateString()} />
          <FormItem label="To" />
          <FormItem label="Amount" value={200} unit="kr" />
          <FormItem label="Note" value="Gift from grandma" grow={true} />
          <View style={styles.btn}>
          <Text style={styles.btnLabel}>Add transaction</Text>
          </View>
        </View>
      );
  },
});

const styles = StyleSheet.create({
  btn: {
    borderRadius: 20,
    backgroundColor: '#81c04d',
    margin: 4,
    padding: 8,
  },
  btnLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Avenir Next',
    color: '#fff',
  }
});

module.exports = Create;
