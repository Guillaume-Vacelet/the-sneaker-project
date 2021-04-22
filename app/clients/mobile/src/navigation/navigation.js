//react
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
//redux
import { connect } from 'react-redux'
//views
import HomeScreen from "../views/Home/HomeScreen";
import ProfileScreen from "../views/Profile/ProfileScreen";
import SearchScreen from "../views/Search/SearchScreen";
import ScanScreen from "../views/Scan/ScanScreen";
import SignInScreen from '../views/Authentication/SignInScreen';
import SignUpScreen from '../views/Authentication/SignUpScreen';
import LoadingScreen from '../views/LoadingScreen';
import SettingsScreen from '../views/Settings/SettingsScreen';

const AppTabs = createBottomTabNavigator();
const AppTabsScreen = () => (
  <AppTabs.Navigator initialRouteName="Home"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === 'Home') {
            iconName = 'home';
        } else if (route.name === 'Search') {
            iconName = 'search';
        } else if (route.name === 'Scan') {
            iconName = 'camera';
        } else if (route.name === 'Profile') {
            iconName = 'user-circle';
        } else if (route.name === 'Settings') {
            iconName = 'cog';
        } else {
            iconName = 'question'
        }
        return <Icon name={iconName} size={size} color={color} type={"font-awesome-5"}/>;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#73eca6',
      inactiveTintColor: 'black',
      showLabel: false
    }}
  >
    <AppTabs.Screen name="Home" component={HomeScreen} />
    <AppTabs.Screen name="Search" component={SearchScreen} />
    <AppTabs.Screen name="Scan" component={ScanScreen} />
    <AppTabs.Screen name="Profile" component={ProfileScreen} />
    <AppTabs.Screen name="Settings" component={SettingsScreen} />
  </AppTabs.Navigator>
);

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={SignInScreen} options={{headerShown: false}} />
    <AuthStack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: false}} />
  </AuthStack.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({loggedIn}) => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 500);
  }, [])

  return (
    <RootStack.Navigator
      headerMode="none"
      screenOptions={{ animationEnabled: false }}
      mode="modal"
    >
      {isLoading 
        ? <RootStack.Screen name="LoadingScreen" component={LoadingScreen} />
        : loggedIn 
          ? <RootStack.Screen name="AppTabsScreen" component={AppTabsScreen} />
          : <RootStack.Screen name="AuthStackScreen" component={AuthStackScreen} />
      }
    </RootStack.Navigator>
  );
};

function Navigator({loggedIn}) {
  return (
    <NavigationContainer>
      <RootStackScreen loggedIn={loggedIn} />
    </NavigationContainer>
  )
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn,
  };
};
export default connect(mapStateToProps)(Navigator)