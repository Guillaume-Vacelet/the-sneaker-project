import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import {store, persistedStore} from "./src/redux/store";
import Navigator from './src/core/navigation/navigation';

export default function App() {
  // const [jwt, setJWT] = React.useState(null);

//   /**
//    * Called when component is mount, get the JWT from the async storage and store it to appContext
//    */ 
//   React.useEffect(() => {
//     getJwt().then((newJReactwt) => {
//         setJWT(newJwt);
//     }).catch(() => {
//     });
// }, [])

  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistedStore}> */}
        <Navigator />
      {/* </PersistGate> */}
    </Provider>
  );
}