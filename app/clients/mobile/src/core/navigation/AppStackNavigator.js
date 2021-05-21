import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../../views/Home/HomeScreen";
import SettingsStackNavigator from './SettingsStackNavigator';
import ProfileScreen from "../../views/Profile/ProfileScreen";
import ScanScreen from "../../views/Scan/ScanScreen";

const AppStack = createStackNavigator();
const AppStackNavigator = () => (
  <AppStack.Navigator initialRouteName="Home" mode={"card"}
    screenOptions={{
      gestureEnabled: false,
    }}
  >
    <AppStack.Screen name="Home" component={HomeScreen} 
      options={{
        headerShown: false,
      }}
    />
    <AppStack.Screen name="Settings" component={SettingsStackNavigator} 
      options={{
        headerShown: false,
      }} 
    />
    <AppStack.Screen name="Profile" component={ProfileScreen} 
      options={{
        headerShown: false,
        gestureDirection: 'horizontal-inverted',
      }} 
    />
    <AppStack.Screen name="Scan" component={ScanScreen} 
      options={{
        headerShown: false,
      }} 
    />
  </AppStack.Navigator>
);

export default AppStackNavigator;