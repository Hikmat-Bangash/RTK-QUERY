/* eslint-disable @typescript-eslint/ban-ts-comment */
// import { configureStore } from "@reduxjs/toolkit";
// import { studentApi } from "../features/studentSlice";

// export const store = configureStore({
//   reducer: {
//     [studentApi.reducerPath]: studentApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(studentApi.middleware),
// });

// @ts-nocheck

import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist'; // Import persistStore
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { studentApi } from '../features/studentSlice';

const persistConfig = {
  key: 'root',
  storage,
  // Optionally, you can blacklist certain reducers that you don't want to persist
  blacklist: [studentApi.reducerPath],
};

const rootReducer = combineReducers({
  [studentApi.reducerPath]: studentApi.reducer,
  // other reducers can be combined here
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(studentApi.middleware),
});

export const persistor = persistStore(store); // Create and export persistor

export default { store, persistor }; // Export both store and persistor

