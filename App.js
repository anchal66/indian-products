import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';

const navigator = createStackNavigator({
  Home: HomeScreen
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Made In By Whom'
  }
});

export default createAppContainer(navigator);