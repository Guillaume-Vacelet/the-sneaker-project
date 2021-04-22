import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';

import authReducer from './reducers/authReducer'

const rootReducer = combineReducers({
  auth: authReducer
})

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);
// export const store = createStore(persistedReducer);
// export const persistedStore = persistStore(store);

export const store = createStore(rootReducer);