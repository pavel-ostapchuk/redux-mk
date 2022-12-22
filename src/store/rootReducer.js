// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import { UsersReducer } from './UsersPage/reducer';

import { configureStore } from '@reduxjs/toolkit';
import { UsersSlice } from './UsersPage/reducer';

const { combineReducers } = require('redux');

// const { combineReducers, createStore, applyMiddleware } = require('redux');

// Init Vanilla Redux
// const rootReducer = combineReducers({
//   usersPage: UsersReducer,
// });

// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// ======================================================

const rootReducer = combineReducers({
  usersPage: UsersSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
