import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';

const headerStyles = {
  headerBackTitle: null,
  headerTintColor: '#2c3e50',
  headerStyle: {
    borderBottomWidth: 0,
    backgroundColor: '#ecf0f1'
  },
  headerTitleStyle: {
    fontWeight: 'bold'
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Game: GameScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      ...headerStyles
    }
  }
);

export default createAppContainer(AppNavigator);
