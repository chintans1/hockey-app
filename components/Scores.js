import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import GameScore from './game-scores/GameScore';

import { getScores } from '../redux/actions/scores.actions';
import { styles } from '../styles';

// TODO: Maybe the screens should be handling all interaction with redux store..
// Components should be dumb, take in "games" array as prop. Research on best practices here..

// TODO: Better folder structure inside components/ folder, Scores.js should belong in a folder
class Scores extends Component {
  componentDidMount = () => {
    this.props.getScores('2019-03-25');
  }

  renderGameScore = ({ item }) => (
    <GameScore
      homeTeam={item.homeTeam}
      roadTeam={item.roadTeam}
      gameScore={{ ...item.gameScore, ...item.gameInformation }} // TODO: Might have to change API to return this better
    />
  );

  render() {
    const { scores } = this.props;

    return (
      <View style={componentStyles.container}>
        <FlatList
          data={scores}
          renderItem={this.renderGameScore}
        />
      </View>
    );
  }
}

const componentStyles = StyleSheet.create({
  container: styles.defaultContainer
})

// FIXME: renaming Scores to Games
const mapStateToProps = (state) => {
  const { scores } = state.scoresReducer;
  let storedScores = scores.map(score => ({...score, key: `${score.gameId}`}))

  return {
    scores: storedScores
  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getScores,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Scores);