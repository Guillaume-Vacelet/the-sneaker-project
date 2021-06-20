import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';

import userReducer from './reducers/userReducer'
import themeReducer from './reducers/themeReducer'

const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer
})

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);
// export const store = createStore(persistedReducer);
// export const persistedStore = persistStore(store);

export const store = createStore(rootReducer);