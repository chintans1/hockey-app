import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import GameScore from '../components/GameScore';

import { getGamesForDate } from '../redux/actions/games.actions';
import { dateUtil } from '../utils';
import { typography, styles } from '../styles';

class GamesScreen extends Component {
  static navigationOptions = {
    title: 'Games',
    headerTitleStyle: typography.bigHeaderTitleStyle
  };

  constructor(props) {
    super(props)
    this.state = { refreshing: false }
  };

  componentDidMount = () => {
    this.props.getGamesForDate(dateUtil.getCurrentDate());
  };

  onRefresh = () => {
    this.setState({ refreshing: true }, () => {
      this.props.getGamesForDate(dateUtil.getCurrentDate());
      this.setState({ refreshing: false });
    });
  };

  renderEachGame = ({ item }) => (
    <GameScore
      homeTeam={item.homeTeam}
      roadTeam={item.roadTeam}
      gameInformation={item.gameInformation}
    />
  );

  render() {
    const { games } = this.props;

    return (
      <SafeAreaView style={componentStyles.container}>
        {/* TODO: Loading icon instead of showing blank screen waiting for API results */}
        {/* TODO: Do not re-render the whole list when refreshed. Don't like the blank screen
                  shown during refresh */}
        <FlatList
          data={games}
          renderItem={this.renderEachGame}
          onRefresh={() => this.onRefresh()}
          refreshing={this.state.refreshing}
        />
      </SafeAreaView>
    )
  };
}

const componentStyles = StyleSheet.create({
  container: styles.defaultContainer
});

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