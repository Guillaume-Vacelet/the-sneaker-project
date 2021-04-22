import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

export default function BottomNavBar(props) {
  const BottomNavBar = createBottomTabNavigator();

  return (
    <BottomNavBar.Navigator initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                  iconName = 'home';
              } else if (route.name === 'Search') {
                  iconName = 'search';
              } else if (route.name === 'Profile') {
                  iconName = 'user';
              } else {
                  iconName = 'question'
              }
              return <Icon name={iconName} size={size} color={color} type={"font-awesome-5"}/>;
            },
          })}
        >
          <BottomNavBar.Screen name="Home" component={props.homeScreen} />
          <BottomNavBar.Screen name="Search" component={props.searchScreen} />
          <BottomNavBar.Screen name="Profile" component={props.settingsScreen} />
        </BottomNavBar.Navigator>
  )
}