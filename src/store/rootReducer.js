const { configureStore } = require('@reduxjs/toolkit');
const { combineReducers, createStore, applyMiddleware } = require('redux');
const { composeWithDevTools } = require('redux-devtools-extension');
const { default: thunk } = require('redux-thunk');
const { UsersReducer, usersSlice } = require('./UsersPage/reducer');

const rootReducer = combineReducers({
  users: usersSlice.reducer,
});

// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export const store = configureStore({ reducer: rootReducer });
