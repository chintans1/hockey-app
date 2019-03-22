import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';

import { styles } from './styles/index';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Game: GameScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      ...styles.defaultHeaderStyle
    }
  }
);

export default createAppContainer(AppNavigator);
