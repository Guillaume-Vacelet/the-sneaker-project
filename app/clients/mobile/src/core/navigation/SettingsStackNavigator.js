import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from "../../views/Settings/SettingsScreen";
import HelpPage from "../../views/Settings/HelpPage";
import AboutUsPage from "../../views/Settings/AboutUsPage";

const SettingsStack = createStackNavigator();
const SettingsStackNavigator = () => (
  <SettingsStack.Navigator initialRouteName="Settings" 
    screenOptions={{
      gestureEnabled: false,
    }}
  >
    <SettingsStack.Screen name="Settings" component={SettingsScreen} 
      options={{
        headerShown: false,
        gestureEnabled: false,
      }}
    />
    <SettingsStack.Screen name="Help" component={HelpPage} 
      options={{
        headerShown: false,
        gestureEnabled: false,
      }}
    />
    <SettingsStack.Screen name="AboutUs" component={AboutUsPage} 
      options={{
        headerShown: false,
        gestureEnabled: false,
      }}
    />
  </SettingsStack.Navigator>
);

export default SettingsStackNavigator;