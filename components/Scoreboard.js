import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

import { colors } from '../styles';
import { dateUtil } from '../utils';

export default class Scoreboard extends Component {
  render() {
    const { gameDate, gameScore, gameStatus, periodInfo } = this.props.gameInformation;
    let gameInfo;

    if (gameStatus === "Preview") {
      let formattedGameTime = dateUtil.getTimeFromDate(gameDate);

      gameInfo =
        <View style={componentStyle.gameInfo}>
          <Text style={componentStyle.gameInfoText}>Starts</Text>
          <Text style={componentStyle.gameInfoText}>{formattedGameTime}</Text>
        </View>;
    } else if (gameStatus === "Live") {
      gameInfo =
        <View style={componentStyle.gameInfo}>
          <Text style={componentStyle.gameInfoText}>{periodInfo.currentPeriod}</Text>
          <Text style={componentStyle.gameInfoText}>{periodInfo.currentPeriodTimeRemaining}</Text>
        </View>;
    } else {
      gameInfo =
        <View style={componentStyle.gameInfo}>
          <Text style={componentStyle.gameInfoText}>Final</Text>
          <Text style={componentStyle.gameInfoText}>{periodInfo.currentPeriod}</Text>
        </View>;
    }

    return (
      <View style={componentStyle.scoreboard}>
        <View style={componentStyle.gameScore}>
          <Text style={componentStyle.gameScoreText}>{gameScore.homeTeam}</Text>
        </View>

        {gameInfo}
        {/* Preview, Live, Final are the three types for gameInfo.gameStatus */ }

        <View style={componentStyle.gameScore}>
          <Text style={componentStyle.gameScoreText}>{gameScore.roadTeam}</Text>
        </View>
      </View>
    )
  }
}

const componentStyle = StyleSheet.create({
  scoreboard: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row'
  },

  gameInfo: {
    flex: 4,
    flexDirection: 'column'
  },

  gameInfoText: {
    color: colors.secondaryTextColor,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  gameScore: {
    flex: 1
  },

  gameScoreText: {
    color: colors.primaryTextColor,
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});