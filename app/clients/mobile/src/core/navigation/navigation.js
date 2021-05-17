//react
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//redux
import { connect } from 'react-redux'
//views
import AuthStackNavigator from './AuthStackNavigator';
import AppStackNavigator from './AppStackNavigator';
// import LoadingScreen from '../../views/LoadingScreen';
// import { AppTabsNavigator } from './AppTabsNavigator';


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
      mode="modal"
    >
      { loggedIn 
        ? <RootStack.Screen name="AppStackNavigator" component={AppStackNavigator} />
        : <RootStack.Screen name="AuthStackNavigator" component={AuthStackNavigator} />
      }
    </RootStack.Navigator>
  );

  // return (
  //   <RootStack.Navigator
  //     headerMode="none"
  //     screenOptions={{ animationEnabled: false }}
  //     mode="modal"
  //   >
  //     {isLoading 
  //       ? <RootStack.Screen name="LoadingScreen" component={LoadingScreen} />
  //       : loggedIn 
  //         ? <RootStack.Screen name="AppTabsNavigator" component={AppTabsNavigator} />
  //         : <RootStack.Screen name="AuthStackNavigator" component={AuthStackNavigator} />
  //     }
  //   </RootStack.Navigator>
  // );
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