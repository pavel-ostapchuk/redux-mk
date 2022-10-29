import { configureStore } from '@reduxjs/toolkit';
import { UsersSlice } from './UsersPage/reducer';

const { combineReducers, createStore, applyMiddleware } = require('redux');

// Init Vanilla Redux
// const rootReduce = combineReducers({
//   usersPage: UsersReducer,
// });

// export const store = createStore(rootReduce, composeWithDevTools(applyMiddleware(thunk)));

const rootReducer = combineReducers({
  usersPage: UsersSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
