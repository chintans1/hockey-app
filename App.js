import React, { PureComponent } from 'react'
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

import GamesScreen from './screens/GamesScreen';
import GameScreen from './screens/GameScreen';
import StandingsScreen from './screens/StandingsScreen';
import configureStore from './redux/store';

import { styles, colors, typography } from './styles/index';

const GamesStack = createStackNavigator(
  {
    Games: GamesScreen,
    Game: GameScreen // TODO: SingleGameScreen?
  },
  {
    initialRouteName: 'Games',
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
    Games: GamesStack,
    Standings: StandingsStack
  },
  {
    initialRouteName: 'Games',
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

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={configureStore()}>
        <StatusBar barStyle="light-content" />
        <Navigation />
      </Provider>
    )
  }
}
