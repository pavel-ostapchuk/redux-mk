import { combineReducers, configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { usersSlice } from 'store/pages/UsersPage/reducer';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const rootReducer = combineReducers({ usersReducer: usersSlice.reducer });

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const store = configureStore({ reducer: rootReducer });

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
