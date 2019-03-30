import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import GameScore from '../components/game-scores/GameScore';

import { getScores } from '../redux/actions/scores.actions';
import { typography, styles } from '../styles';

class ScoresScreen extends Component {
  static navigationOptions = {
    title: 'Scores',
    headerTitleStyle: typography.bigHeaderTitleStyle
  };

  componentDidMount = () => {
    this.props.getScores('2019-03-29'); // TODO: Get current date
  };

  renderEachGame = ({ item }) => (
    <GameScore
      homeTeam={item.homeTeam}
      roadTeam={item.roadTeam}
      gameScore={item.gameInformation}
    />
  );

  render() {
    const { games } = this.props;

    return (
      <SafeAreaView style={componentStyles.container}>
        <FlatList
          data={games}
          renderItem={this.renderEachGame}
        />
      </SafeAreaView>
    )
  };
}

const componentStyles = StyleSheet.create({
  container: styles.defaultContainer
});

// FIXME: renaming Scores to Games
const mapStateToProps = (state) => {
  const { scores } = state.scoresReducer;
  let storedScores = scores.map(score => ({...score, key: `${score.gameId}`}))

  return {
    games: storedScores
  }
};

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getScores,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ScoresScreen);