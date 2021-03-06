'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
} = React;
var Button = require('./Button');
  
var Toolbar = React.createClass({
  button(i) {
    return <Button onPress={() => this.props.onChangeView(this.props.buttons[i].view)} style={[styles.toolbarButton, i == 0 ? styles.left : styles.right]} label={this.props.buttons[i].label} />
  },
  render() {
    return (
      <View>
        <View style={styles.toolbar}>
          {this.button(0)}
          <Text style={styles.toolbarTitle}>{this.props.title}</Text>
          {this.props.buttons.length > 1 ? this.button(1) : false}
        </View>
      </View>
    );
  }
});
  
var styles = StyleSheet.create({
    toolbar: {
        paddingTop: 30,
        paddingBottom: 10,
        flexDirection: 'row'
    },
    toolbarButton: {
        width: 60,
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'Avenir Next',
    },
    left: {
        color: '#c3d',
        marginLeft: 10,
    },
    right: {
        color: '#3e3',
        marginRight: 10,
    },
    toolbarTitle: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        flex: 1,
        fontFamily: 'Avenir Next',
    }
});

module.exports = Toolbar;
