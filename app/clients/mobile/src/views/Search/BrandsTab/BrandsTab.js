import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BrandsList from './BrandsList';
import BrandProducts from './BrandProducts';

export default function BrandsTab() {
  const BrandsStack = createStackNavigator();

  return (
    <BrandsStack.Navigator initialRouteName="BrandsList">
      <BrandsStack.Screen name="BrandsList" component={BrandsList} options={{headerShown: false}} />
      <BrandsStack.Screen name="BrandProducts" component={BrandProducts} options={{headerShown: false}} />
    </BrandsStack.Navigator>
  );
}