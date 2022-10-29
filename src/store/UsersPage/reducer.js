// Vanilla Redux

import { createSlice } from '@reduxjs/toolkit';
import { fetchUsersAsync } from './actions';

// import { FETCH_USERS, FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS } from './actions';

// const initialState = {
//   usersData: [],
//   loading: false,
//   error: null,
// };

// export const UsersReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_USERS:
//       return { ...state, loading: true };
//     case FETCH_USERS_SUCCESS:
//       return { ...state, loading: false, usersData: action.payload };
//     case FETCH_USERS_FAILURE:
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// ===================================

// Redux-Toolkit

const initialState = {
  usersData: [],
  loading: false,
  error: null,
};

export const UsersSlice = createSlice({
  name: 'Users',
  initialState,
  reducers: {
    increment: (state) => {
      state.figure += 1;
    },
  },
  extraReducers: {
    [fetchUsersAsync.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchUsersAsync.fulfilled.type]: (state, { payload }) => {
      state.loading = false;
      state.usersData = payload;
    },
    [fetchUsersAsync.rejected.type]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
