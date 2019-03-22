import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Game Scores'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Game Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})