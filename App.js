import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import CompanyListScreen from './src/screens/CompanyListScreen';
import CompanyDetails from './src/screens/CompanyDetails';

const navigator = createStackNavigator({
  Home: HomeScreen,
  List: CompanyListScreen,
  Details: CompanyDetails
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Made In By Whom'
  }
});

export default createAppContainer(navigator);