import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from 'screens/HomeScreen';

const navigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
});

export default navigator;
