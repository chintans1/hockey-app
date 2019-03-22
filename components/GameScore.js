import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../styles'

export default class GameScore extends Component {
  render() {
    const { homeTeam, roadTeam } = this.props;

    return (
      <View style={styles.card}>
        <Text style={styles.itemText}>
          {homeTeam} vs {roadTeam}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.secondaryColor,
    margin: 10,
    paddingVertical: 15,
    alignItems: 'center'
  },

  itemText: {
    color: colors.primaryTextColor,
    fontSize: 20,
    fontWeight: 'bold'
  }
})