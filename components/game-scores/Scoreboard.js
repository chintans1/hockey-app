import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

import { colors } from '../../styles';

export default class Scoreboard extends Component {
  render() {
    const { gameScore } = this.props;

    return (
      <View style={componentStyle.gameInfo}>
        <View style={{ flex: 1 }}>
          <Text style={componentStyle.gameScoreText}>{gameScore.gameScore.homeTeam}</Text>
        </View>

        <View style={{ flex: 4, flexDirection: 'column' }}>
          <Text style={componentStyle.gameInfoText}>{gameScore.periodInfo.currentPeriod}</Text>
          <Text style={componentStyle.gameInfoText}>{gameScore.periodInfo.currentPeriodTimeRemaining}</Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text style={componentStyle.gameScoreText}>{gameScore.gameScore.roadTeam}</Text>
        </View>
      </View>
    )
  }
}

const componentStyle = StyleSheet.create({
  gameInfo: {
    alignItems: 'center',
    flex: 2,
    flexDirection: 'row'
  },

  gameInfoText: {
    color: colors.secondaryTextColor,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  gameScoreText: {
    color: colors.primaryTextColor,
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});