import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import GameScore from './game-scores/GameScore';

import { colors } from '../styles';

export default class Scores extends Component {
  render() {
    const { scores } = this.props;

    return (
      <View style={styles.root}>
        <FlatList
          style={styles.text}
          data={scores}
          renderItem={
            ({item}) =>
              <GameScore
                homeTeam={item.homeTeam}
                roadTeam={item.roadTeam}
                gameScore={item.gameScore}
              />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.backgroundColor,
    flex: 1
  }
})