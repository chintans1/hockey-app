import React, { PureComponent } from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import GameScore from '../components/GameScore';

import { getGamesForDate } from '../redux/actions/games.actions';
import { dateUtil } from '../utils';
import { typography, styles } from '../styles';

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

  onPress = () => {
    // TODO: Need to forward props regarding the game ID
      // so it use to fetch game details from API
    this.props.navigation.navigate('SingleGame');
  }

  // FIXME: In the future, incorporate force touch into the click
  renderEachGame = ({ item }) => (
    <TouchableOpacity
      onPress={() => this.onPress()}
      activeOpacity={0.7}
    >
      <GameScore
        homeTeam={item.homeTeam}
        roadTeam={item.roadTeam}
        gameInformation={item.gameInformation}
      />
    </TouchableOpacity>
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
          keyExtractor={(item) => `${item.gameId}`}
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

  return {
    games
  }
};

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getGamesForDate,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(GamesScreen);