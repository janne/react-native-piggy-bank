import React, {
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

var Button = React.createClass({
  render() {
    return (
      <TouchableHighlight underlayColor='#fff' onPress={this.props.onPress}>
        <Text style={this.props.style}>{this.props.label}</Text>
      </TouchableHighlight>
    );
  }
});

module.exports = Button;
