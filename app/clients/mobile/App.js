import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import {store, persistedStore} from "./src/redux/store";
import Navigator from './src/core/navigation/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FlashMessage from "react-native-flash-message";

export default function App() {

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigator />
        <FlashMessage position="top" />
      </SafeAreaProvider>
    </Provider>
  );
}