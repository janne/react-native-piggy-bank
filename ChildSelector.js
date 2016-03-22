'use strict';
import React, { View, StyleSheet, ScrollView, Text } from 'react-native';
import Child from './Child';
import PageControl from 'react-native-page-control';

var ChildSelector = React.createClass({
  getInitialState() {
    return {
      page: 0
    }
  },
  pressIndicator(i) {
    this.refs.scrollView.scrollTo({x: i*400});
    this.setState({ page: i });
  },
  handleScroll(e) {
    let page = Math.round(e.nativeEvent.contentOffset.x/400);
    this.setState({ page: page });
  },
  render() {
    return (
      <View style={styles.container}>
        <ScrollView ref="scrollView" style={styles.scrollView} horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false} onScroll={this.handleScroll} scrollEventThrottle={0.2}>
          { this.props.children.map(child => <Child key={child.name} {...child} />) }
        </ScrollView>
        <PageControl numberOfPages={this.props.children.length} currentPage={this.state.page} hidesForSinglePage={true} onPageIndicatorPress={this.pressIndicator} />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    padding: 10,
  },
});

module.exports = ChildSelector;
