import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Kinyarwanda',
    },
  },
);

export default navigator;
