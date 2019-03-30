import React, { Component } from 'react'
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

import ScoresScreen from './screens/ScoresScreen';
import GameScreen from './screens/GameScreen';
import StandingsScreen from './screens/StandingsScreen';
import configureStore from './redux/store';

import { styles, colors, typography } from './styles/index';

const ScoresStack = createStackNavigator(
  {
    Scores: ScoresScreen,
    Game: GameScreen
  },
  {
    initialRouteName: 'Scores',
    defaultNavigationOptions: {
      ...styles.defaultHeaderStyle
    }
  }
);

const StandingsStack = createStackNavigator(
  {
    Standings: StandingsScreen
  },
  {
    initialRouteName: 'Standings',
    defaultNavigationOptions: {
      ...styles.defaultHeaderStyle
    }
  }
);

const AppNavigator = createBottomTabNavigator(
  {
    Scores: ScoresStack,
    Standings: StandingsStack
  },
  {
    initialRouteName: 'Scores',
    tabBarOptions: {
      activeTintColor: colors.primaryTextColor,
      inactiveTintColor: colors.secondaryTextColor,
      showIcon: false,
      labelStyle: typography.tabBarLabelStyle,
      style: {
        borderTopWidth: 0,
        backgroundColor: colors.backgroundColor
      }
    }
  }
);

const Navigation = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <StatusBar barStyle="light-content" />
        <Navigation />
      </Provider>
    )
  }
}
