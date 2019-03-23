import React, { Component } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';

import { colors, typography } from '../styles';

export default class StandingsScreen extends Component {
  static navigationOptions = {
    title: 'Standings',
    headerTitleStyle: typography.bigHeaderTitleStyle
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.text}>Standings Screen</Text>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: colors.backgroundColor
  },

  text: {
    color: colors.primaryTextColor,
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
