import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { colors } from '../styles'

export default class GameScore extends Component {
  render() {
    const { homeTeam, roadTeam } = this.props;

    return (
      <View style={styles.card}>
        <View style={styles.team}>
          <View style={styles.teamLogoContainer}>
            <Image style={styles.teamLogo} />
          </View>
          <Text style={styles.teamText}>{homeTeam}</Text>
        </View>

        <Text style={styles.middleText}>vs</Text>

        <View style={styles.team}>
          <View style={styles.teamLogoContainer}>
            <Image style={styles.teamLogo} />
          </View>
          <Text style={styles.teamText}>{roadTeam}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: colors.secondaryColor,
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    padding: 10
  },

  team: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column'
  },

  teamLogoContainer: {
    alignItems: 'center'
  },

  teamLogo: {
    backgroundColor: colors.backgroundColor,
    borderRadius: 60 / 2,
    width: 60,
    height: 60,
  },

  teamText: {
    color: colors.primaryTextColor,
    flex: 2,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 10
  },

  middleText: {
    color: colors.secondaryTextColor,
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})