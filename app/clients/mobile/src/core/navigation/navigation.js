//react
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//redux
import { connect } from 'react-redux'
//views
import AuthStackNavigator from './AuthStackNavigator';
import AppStackNavigator from './AppStackNavigator';


const RootStack = createStackNavigator();
const RootStackScreen = ({loggedIn}) => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 500);
  }, [])

  return (
    <RootStack.Navigator headerMode="none" mode={"modal"}>
      { loggedIn 
        ? <RootStack.Screen name="AppStackNavigator" component={AppStackNavigator} />
        : <RootStack.Screen name="AuthStackNavigator" component={AuthStackNavigator} />
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
    loggedIn: state.user.loggedIn,
  };
};
export default connect(mapStateToProps)(Navigator)