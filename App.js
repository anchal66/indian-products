import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import CompanyListScreen from './src/screens/CompanyListScreen';

const navigator = createStackNavigator({
  Home: HomeScreen,
  List: CompanyListScreen
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Made In By Whom'
  }
});

export default createAppContainer(navigator);