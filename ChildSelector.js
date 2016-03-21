'use strict';
import React, { View, StyleSheet, ScrollView, Text } from 'react-native';
import Avatar from './Avatar';
import PageControl from 'react-native-page-control';

var ChildSelector = React.createClass({
  getInitialState() {
    return {
      page: 0
    }
  },
  pressIndicator(i) {
    this.refs.scrollView.scrollTo({x: i*400});
    //this.refs.scrollView.contentInset = {x: 0, y: 0};
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
          <View style={styles.page}>
            <Text style={styles.title}>All</Text>
            <Avatar name="vilgot" size="large" />
            <Text style={styles.amount}>345 SEK</Text>
          </View>
          <View style={styles.page}>
            <Text style={styles.title}>Vilgot</Text>
            <Avatar name="vilgot" size="large" />
            <Text style={styles.amount}>345 SEK</Text>
          </View>
          <View style={styles.page}>
            <Text style={styles.title}>Elze</Text>
            <Avatar name="elze" size="large" />
            <Text style={styles.amount}>120 SEK</Text>
          </View>
        </ScrollView>
        <PageControl numberOfPages={3} currentPage={this.state.page} hidesForSinglePage={true} onPageIndicatorPress={this.pressIndicator} />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    padding: 10,
  },
  page: {
    alignItems: 'center',
    width: 400,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Avenir Next',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 20,
    fontFamily: 'Avenir Next',
    textAlign: 'center',
    fontWeight: 'bold',
  }
});

module.exports = ChildSelector;
