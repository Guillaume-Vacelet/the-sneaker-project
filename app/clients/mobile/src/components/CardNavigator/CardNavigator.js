import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import CardGrid from './CardGrid';
import CardDetail from './CardDetail';

const CardStack = createSharedElementStackNavigator();

export default function CardNavigator(props) {
  return (
    <CardStack.Navigator initialRouteName="Card"
      screenOptions={{
        gestureEnabled: true,
        cardOverlayEnabled: true,
        headerShown: false,
      }}
      mode="modal"
    >
      <CardStack.Screen name="CardGrid" component={CardGrid} />
      <CardStack.Screen name="CardDetail" component={CardDetail}
        sharedElements={(route, otherRoute, showing) => {
          const { item } = route.params;
          return item;
        }}
      />
    </CardStack.Navigator>
  );
}