import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//views
import PopularTab from '../../views/Search/PopularTab/PopularTab';
import CategoriesTab from '../../views/Search/CategoriesTab/CategoriesTab';
import BrandsTab from '../../views/Search/BrandsTab/BrandsTab';


const SearchTabs = createMaterialTopTabNavigator();

export const SearchTabsNavigator = () => (
  <SearchTabs.Navigator initialRouteName={"Popular"}
    tabBarOptions={{
      labelStyle: { fontSize: 20, fontWeight: '600', textTransform: 'capitalize' },
      indicatorStyle: { height: '7%', backgroundColor: 'black' },
    }}
  >
    <SearchTabs.Screen name="Populaires" component={PopularTab} />
    <SearchTabs.Screen name="Categories" component={CategoriesTab} />
    <SearchTabs.Screen name="Marques" component={BrandsTab} />
  </SearchTabs.Navigator>
);