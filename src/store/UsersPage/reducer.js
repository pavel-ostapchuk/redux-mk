import { createSlice } from '@reduxjs/toolkit';
import { fetchUsersAsync } from './actions';

// Vanilla Redux
// const initialState = {
//   users: [],
//   loading: false,
//   error: null,
// };

// export const UsersReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_USERS:
//       return { ...state, loading: true };
//     case FETCH_USERS_SUCCESS:
//       return { ...state, loading: false, users: action.payload };
//     case FETCH_USERS_FAILURE:
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// ===============

// Redux-toolkit

const initialState = {
  users: [],
  loading: false,
  error: null,
};

// export const UsersSlice = createSlice({
//   name: 'Users',
//   initialState,
//   reducers: {
//     fetchUsers(state) {
//       return { ...state, loading: true };
//     },
//     fetchUsersSuccess(state, action) {
//       return { ...state, loading: false, users: action.payload };
//     },
//     fetchUsersFailure(state, action) {
//       return { ...state, loading: false, error: action.payload };
//     },
//   },
// });

export const UsersSlice = createSlice({
  name: 'Users',
  initialState,
  extraReducers: {
    [fetchUsersAsync.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchUsersAsync.fulfilled.type]: (state, { payload }) => {
      state.loading = false;
      state.users = payload;
    },
    [fetchUsersAsync.rejected.type]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
