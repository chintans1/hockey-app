import React, { PureComponent } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';

import { colors, styles, typography } from '../styles';

class SingleGameScreen extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    const homeTeam = navigation.getParam('homeTeamName');
    const roadTeam = navigation.getParam('roadTeamName');

    return {
      title: `${homeTeam} vs ${roadTeam}`
    }
  };

  render() {
    const { currentGame } = this.props;

    return (
      <SafeAreaView style={componentStyles.container}>
        <Text style={componentStyles.text}>{currentGame.homeTeam} vs {currentGame.roadTeam}</Text>
      </SafeAreaView>
    );
  }
}

const componentStyles = StyleSheet.create({
  container: {
    ...styles.defaultContainer,
    justifyContent: 'center'
  },

  // FIXME: This is temporary
  text: {
    color: colors.primaryTextColor,
    fontSize: 36,
    ...typography.boldCenterTextStyle
  }
});

const mapStateToProps = (state) => {
  const { currentGame } = state.gamesReducer;

  return {
    currentGame
  }
};

export default connect(mapStateToProps)(SingleGameScreen);