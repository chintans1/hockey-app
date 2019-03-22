import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Team from './Team';
import Scoreboard from './Scoreboard';

import { colors, dimens, styles } from '../../styles';

export default class GameScore extends Component {
  render() {
    const { homeTeam, roadTeam, gameScore } = this.props;

    return (
      <View style={componentStyles.card}>
        <Team team={homeTeam} />
        <Scoreboard gameScore={gameScore} />
        <Team team={roadTeam} />
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
    flexDirection: 'row',
    margin: dimens.padding,
    padding: dimens.padding,
    ...styles.cardShadow
  }
});