//react
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//redux
import { connect } from 'react-redux'
//views
import SignInScreen from '../views/Authentication/SignInScreen';
import SignUpScreen from '../views/Authentication/SignUpScreen';
import LoadingScreen from '../views/LoadingScreen';
import { BottomNavBarTabs } from './BottomNavBarTabs';


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
          ? <RootStack.Screen name="BottomNavBarTabs" component={BottomNavBarTabs} />
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