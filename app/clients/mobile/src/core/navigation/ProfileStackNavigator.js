import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../../views/Profile/ProfileScreen';
import EditProfileScreen from '../../views/Profile/EditProfileScreen';
import EmailVerification from '../../views/Authentication/EmailVerification';

const ProfileStack = createStackNavigator();
const ProfileStackNavigator = () => (
  <ProfileStack.Navigator initialRouteName="Profile" >
    <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}} />
    <ProfileStack.Screen name="EditProfile" component={EditProfileScreen} options={{headerShown: false}} />
    <ProfileStack.Screen name="EmailVerification" component={EmailVerification} options={{headerShown: false}} />
  </ProfileStack.Navigator>
);

export default ProfileStackNavigator;