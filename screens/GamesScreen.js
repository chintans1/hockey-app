import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import GameScore from '../components/game-scores/GameScore';

import { getGamesForDate } from '../redux/actions/games.actions';
import { typography, styles } from '../styles';

class GamesScreen extends Component {
  static navigationOptions = {
    title: 'Games',
    headerTitleStyle: typography.bigHeaderTitleStyle
  };

  componentDidMount = () => {
    this.props.getGamesForDate('2019-03-29'); // TODO: Get current date
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
  const { games } = state.gamesReducer;
  let storedGames = games.map(game => ({...game, key: `${game.gameId}`}))

  return {
    games: storedGames
  }
};

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getGamesForDate,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(GamesScreen);