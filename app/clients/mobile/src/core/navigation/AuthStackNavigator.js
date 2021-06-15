import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../../views/Authentication/SignInScreen';
import SignUpScreen from '../../views/Authentication/SignUpScreen';
import ForgotPassword from '../../views/Authentication/ForgotPassword';
import EmailVerification from '../../views/Authentication/EmailVerification';

const AuthStack = createStackNavigator();
const AuthStackNavigator = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={SignInScreen} options={{headerShown: false}} />
    <AuthStack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: false}} />
    <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown: false}} />
    <AuthStack.Screen name="EmailVerification" component={EmailVerification} options={{headerShown: false}} />
  </AuthStack.Navigator>
);

export default AuthStackNavigator;