import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import TabBar from '../navigation/TabBar';
import AuthLoadingScreen from '../navigation/AuthLoadingScreen';
import AuthNavigation from './AuthNavigation';

const AppStack = createStackNavigator({TabBar}, {headerMode: 'none'});
const AuthStack = createStackNavigator(
  {AuthNavigation: AuthNavigation},
  {headerMode: 'none'},
);
const SwitchNavigator = createSwitchNavigator(
  {
    Starter: AuthLoadingScreen,
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'Auth',
  },
);

const AppContainer = createAppContainer(SwitchNavigator);

export default AppContainer;
