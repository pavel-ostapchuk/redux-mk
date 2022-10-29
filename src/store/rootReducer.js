import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { UsersReducer, UsersSlice } from './UsersPage/reducer';

// Vanilla Redux
// const rootReducer = combineReducers({
//   users: UsersReducer,
// });

// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

//=========

// Redux-toolkit

const rootReducer = combineReducers({
  users: UsersSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
