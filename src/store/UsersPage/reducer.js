// import { FETCH_USERS, FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS } from './actions';

import { createSlice } from '@reduxjs/toolkit';
import { fetchUsersAsync } from './actions';

// Vanilla Redux
// const initialState = {
//   usersData: null,
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

// Redux-Toolkit
const initialState = {
  usersData: null,
  loading: false,
  error: null,
};

export const UsersSlice = createSlice({
  name: 'Users',
  initialState,
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
