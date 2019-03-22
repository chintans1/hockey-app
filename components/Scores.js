import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import GameScore from './GameScore';

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
                homeTeam={item.teamOne}
                roadTeam={item.teamTwo}
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