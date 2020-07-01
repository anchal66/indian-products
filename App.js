import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const navigator = createStackNavigator({

},
{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Made In By Who'
  }
});

export default createAppContainer(navigator);