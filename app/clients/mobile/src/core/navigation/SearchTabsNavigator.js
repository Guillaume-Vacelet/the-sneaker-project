import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//views
import PopularTab from '../../views/Search/PopularTab/PopularTab';
import CategoriesTab from '../../views/Search/CategoriesTab/CategoriesTab';
import BrandsTab from '../../views/Search/BrandsTab/BrandsTab';

import CardNavigator from '../../components/CardNavigator/CardNavigator';

const SearchTabs = createMaterialTopTabNavigator();

export const SearchTabsNavigator = () => (
  <SearchTabs.Navigator initialRouteName={"Popular"}
    tabBarOptions={{
      labelStyle: { fontSize: 20, fontWeight: '600', textTransform: 'capitalize' },
      indicatorStyle: { height: '7%', backgroundColor: 'black' },
    }}
  >
    <SearchTabs.Screen name="Populaires" component={CardNavigator} />
    <SearchTabs.Screen name="Categories" component={CardNavigator} />
    <SearchTabs.Screen name="Marques" component={BrandsTab} />
  </SearchTabs.Navigator>
);