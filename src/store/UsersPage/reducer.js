import { createSlice } from '@reduxjs/toolkit';
import { addUserAsync, deleteUserAsync, fetchUsersAsync } from './async-actions';
// import { FETCH_USERS, FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS } from './async-actions';

// Vanilla reducer
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

// ===============================================================

const initialState = {
  usersData: [],
  loading: false,
  error: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    // Получение пользователей
    [fetchUsersAsync.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchUsersAsync.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.usersData = action.payload;
    },
    [fetchUsersAsync.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Добавление пользователя
    [addUserAsync.pending.type]: (state) => {
      state.loading = true;
    },
    [addUserAsync.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.usersData = [...state.usersData, action.payload];
    },
    [addUserAsync.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // Удаление пользователя
    [deleteUserAsync.pending.type]: (state) => {
      state.loading = true;
    },
    [deleteUserAsync.fulfilled.type]: (state) => {
      state.loading = false;
    },
    [deleteUserAsync.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
