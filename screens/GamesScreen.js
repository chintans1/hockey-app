import React, { PureComponent } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import GameScore from '../components/GameScore';

import { getGamesForDate, getSingleGame } from '../redux/actions/games.actions';
import { dateUtil } from '../utils';
import { typography, styles, colors, dimens } from '../styles';

class GamesScreen extends PureComponent {
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

  onPress = (game) => {
    const { gameId, homeTeam, roadTeam } = game;

    this.props.getSingleGame(gameId);
    this.props.navigation.navigate('SingleGame', {
      homeTeamName: homeTeam.teamName,
      roadTeamName: roadTeam.teamName
    });
  }

  // FIXME: In the future, incorporate force touch into the click
  renderEachGame = ({ item }) => (
    <TouchableOpacity
      onPress={() => this.onPress(item)}
      activeOpacity={0.7}>
      <GameScore
        homeTeam={item.homeTeam}
        roadTeam={item.roadTeam}
        gameInformation={item.gameInformation}
        seriesInformation={item.seriesInformation}
        playoffGame={item.playoffGame}
      />
    </TouchableOpacity>
  );

  renderEmptyList = () => (
    <Text style={componentStyles.emptyList}>No games today</Text>
  )

  render() {
    const { games } = this.props;

    return (
      <SafeAreaView style={componentStyles.container}>
        {/* TODO: Loading icon instead of showing blank screen waiting for API results */}
        {/* TODO: Do not re-render the whole list when refreshed. Don't like the blank screen
                  shown during refresh */}
        <FlatList
          contentContainerStyle={games.length === 0 && componentStyles.centerEmptyList}
          data={games}
          renderItem={this.renderEachGame}
          onRefresh={() => this.onRefresh()}
          refreshing={this.state.refreshing}
          keyExtractor={(item) => `${item.gameId}`}
          ListEmptyComponent={this.renderEmptyList}
        />
      </SafeAreaView>
    )
  };
}

const componentStyles = StyleSheet.create({
  container: styles.defaultContainer,
  centerEmptyList: {
    flex: 1,
    justifyContent: 'center'
  },
  emptyList: {
    ...typography.boldCenterTextStyle,
    color: colors.primaryTextColor,
    fontSize: dimens.tabTextSize,
  }
});

const mapStateToProps = (state) => {
  const { games } = state.gamesReducer;

  return {
    games
  }
};

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getGamesForDate,
    getSingleGame
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(GamesScreen);