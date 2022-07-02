import { createSlice } from '@reduxjs/toolkit';
import { fetchUsersAsync } from './async-actions';
// import {
//   ADD_USER,
//   ADD_USER_FAILURE,
//   ADD_USER_SUCCESS,
//   DELETE_USER,
//   DELETE_USER_FAILURE,
//   DELETE_USER_SUCCESS,
//   FETCH_USERS,
//   FETCH_USERS_FAILURE,
//   FETCH_USERS_SUCCESS,
// } from './async-actions';

const initialState = {
  usersData: [],
  loading: false,
  error: null,
};

// export const UsersReducer = (state = initialState, action) => {
//   switch (action.type) {
//     // получение пользователей
//     case FETCH_USERS:
//       return { ...state, loading: true };
//     case FETCH_USERS_SUCCESS:
//       return { ...state, loading: false, usersData: action.payload };
//     case FETCH_USERS_FAILURE:
//       return { ...state, loading: false, error: action.payload };
//     // добавление пользователя
//     case ADD_USER:
//       return { ...state, loading: true };
//     case ADD_USER_SUCCESS:
//       return { ...state, loading: false, usersData: [...state.usersData, action.payload] };
//     case ADD_USER_FAILURE:
//       return { ...state, loading: false, error: action.payload };
//     // удаление пользователя
//     case DELETE_USER:
//       return { ...state, loading: true };
//     case DELETE_USER_SUCCESS:
//       return { ...state, loading: false };
//     case DELETE_USER_FAILURE:
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };
export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
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
  },
});
