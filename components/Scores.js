import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import GameScore from './game-scores/GameScore';

import { styles } from '../styles';

export default class Scores extends Component {
  render() {
    const { scores } = this.props;

    return (
      <View style={componentStyles.container}>
        <FlatList
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

const componentStyles = StyleSheet.create({
  container: styles.defaultContainer
})