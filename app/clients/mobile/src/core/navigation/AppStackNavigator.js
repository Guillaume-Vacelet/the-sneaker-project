import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../../views/Home/HomeScreen";
// import SettingsScreen from '../../views/Settings/SettingsScreen';
import ProfileScreen from "../../views/Profile/ProfileScreen";
import ScanScreen from "../../views/Scan/ScanScreen";
import SettingsStackNavigator from './SettingsStackNavigator';

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const AppStack = createStackNavigator();
const AppStackNavigator = () => (
  <AppStack.Navigator initialRouteName="Home" 
    screenOptions={{
      gestureEnabled: false,
    }}
  >
    <AppStack.Screen name="Home" component={HomeScreen} options={{
      headerShown: false,
      gestureEnabled: false,
      transitionSpec: {
        open: config,
        close: config
      }
      }}
    />
    <AppStack.Screen name="Settings" component={SettingsStackNavigator} options={{
      headerShown: false,
      gestureEnabled: true,
      transitionSpec: {
        open: config,
        close: config
      }
      }} 
    />
    <AppStack.Screen name="Profile" component={ProfileScreen} options={{
      headerShown: false,
      gestureEnabled: false,
      gestureDirection: 'horizontal-inverted',
      transitionSpec: {
        open: config,
        close: config
      }
      }} 
    />
    <AppStack.Screen name="Scan" component={ScanScreen} options={{
      headerShown: false,
      transitionSpec: {
          open: config,
          close: config
        }
      }} 
    />
  </AppStack.Navigator>
);

export default AppStackNavigator;