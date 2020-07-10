import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import CompanyDetails from './src/screens/CompanyDetails';
import CountryListScreen from './src/screens/CountryListScreen';

const navigator = createStackNavigator({
  Home: HomeScreen,
  List: CountryListScreen,
  Details: CompanyDetails
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Made In By Whom'
  }
});

export default createAppContainer(navigator);