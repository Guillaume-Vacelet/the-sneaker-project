import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import ScanButton from '../../components/ScanButton';
//views
import HomeScreen from "../../views/Home/HomeScreen";
import ProfileScreen from "../../views/Profile/ProfileScreen";
import SearchScreen from "../../views/Search/SearchScreen";
import ScanScreen from "../../views/Scan/ScanScreen";
import SettingsScreen from '../../views/Settings/SettingsScreen';


const AppTabs = createBottomTabNavigator();

export const AppTabsNavigator = () => (
  <AppTabs.Navigator initialRouteName="Home"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'Search') {
          iconName = 'search1';
        } else if (route.name === 'Scan') {
          return <ScanButton size={size} color={color} bgcolor={'#73eca6'} />
        } else if (route.name === 'Profile') {
          iconName = 'user';
        } else if (route.name === 'Settings') {
          iconName = 'setting';
        } else {
          iconName = 'question'
        }
        return <Icon name={iconName} size={23} color={color} type={"antdesign"} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#73eca6',
      inactiveTintColor: '#F5F5F5',
      showLabel: false,
      safeAreaInsets: { bottom: 0, top: 0 },
      style: { 
        backgroundColor: 'black', 
        borderRadius: 50,
        height: 60,
        marginVertical: 20,
        marginHorizontal: 10,
        position: 'absolute'
      }
    }}
  >
    <AppTabs.Screen name="Home" component={HomeScreen} />
    <AppTabs.Screen name="Search" component={SearchScreen} />
    <AppTabs.Screen name="Scan" component={ScanScreen} />
    <AppTabs.Screen name="Profile" component={ProfileScreen} />
    <AppTabs.Screen name="Settings" component={SettingsScreen} />
  </AppTabs.Navigator>
);