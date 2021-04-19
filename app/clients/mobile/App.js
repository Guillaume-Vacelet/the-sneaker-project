import React from 'react';
// react-navigation
import { NavigationContainer } from '@react-navigation/native';
// components
import HomeScreen from './src/views/Home/HomeScreen';
import SearchScreen from './src/views/Search/SearchScreen';
import ProfileScreen from './src/views/Profile/ProfileScreen';
import BottomNavBar from './src/components/BottomNavBar';

export default function App() {
  return (
    <NavigationContainer>
      <BottomNavBar 
        homeScreen={HomeScreen}
        searchScreen={SearchScreen}
        settingsScreen={ProfileScreen}
      />
    </NavigationContainer>
  );
}