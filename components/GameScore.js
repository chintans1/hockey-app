import React, { PureComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Team from './Team';
import Scoreboard from './Scoreboard';

import { colors, dimens, styles } from '../styles';

export default class GameScore extends PureComponent {
  render() {
    const { homeTeam, roadTeam, gameInformation, seriesInformation, playoffGame} = this.props;

    return (
      <View style={componentStyles.card}>
        <View style={componentStyles.topBar}>
          <Team team={homeTeam} />
          <Scoreboard gameInformation={gameInformation} />
          <Team team={roadTeam} />
        </View>

        { playoffGame &&
          <View style={componentStyles.bottomBar}>
            <Text style={componentStyles.bottomBarText}>
              {seriesInformation.seriesStatus}
            </Text>
          </View>
        }
      </View>
    )
  }
}

const componentStyles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: colors.secondaryColor,
    borderRadius: dimens.cardRadius,
    flex: 1,
    margin: dimens.padding,
    ...styles.cardShadow
  },

  topBar: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: dimens.padding
  },

  bottomBar: {
    alignSelf: 'stretch',
    backgroundColor: colors.offsetBackgroundColor,
    borderBottomStartRadius: dimens.cardRadius,
    borderBottomEndRadius: dimens.cardRadius,
    marginTop: dimens.padding / 2,
    paddingVertical: dimens.padding / 2,
  },

  bottomBarText: {
    color: colors.primaryTextColor,
    textAlign: 'center'
  }
});