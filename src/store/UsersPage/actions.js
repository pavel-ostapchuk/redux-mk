import { createAsyncThunk } from '@reduxjs/toolkit';
// import { UsersSlice } from './reducer';
import { UsersServices } from './users-service';

// Vanilla Actions + Action Creators
// export const FETCH_USERS = 'FETCH_USERS';
// export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
// export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

// export const fetchUsers = () => ({ type: FETCH_USERS });
// export const fetchUsersSuccess = (payload) => ({ type: FETCH_USERS_SUCCESS, payload });
// export const fetchUsersFailure = (payload) => ({ type: FETCH_USERS_FAILURE, payload });

// export const fetchUsersAsync = () => async (dispatch) => {
//   try {
//     dispatch(fetchUsers());
//     const { data } = await UsersServices.getUsers();
//     dispatch(fetchUsersSuccess(data));
//   } catch (error) {
//     console.error(error);
//     dispatch(fetchUsersFailure('Ошибка!'));
//   }
// };

// ==========================================

// Redux-toolkit

// const { fetchUsers, fetchUsersSuccess, fetchUsersFailure } = UsersSlice.actions;

// export const fetchUsersAsync = () => async (dispatch) => {
//   try {
//     dispatch(fetchUsers());
//     const { data } = await UsersServices.getUsers();
//     dispatch(fetchUsersSuccess(data));
//   } catch (error) {
//     console.error(error);
//     dispatch(fetchUsersFailure('Упс, ошибка!'));
//   }
// };

// Получение пользователей
export const fetchUsersAsync = createAsyncThunk('users/fetchUsers', async (_, thunkApi) => {
  try {
    const { data } = await UsersServices.getUsers();
    return data;
  } catch (error) {
    console.error(error);
    return thunkApi.rejectWithValue('Ошибка!');
  }
});

// Добавление пользователя
export const addUserAsync = createAsyncThunk('users/addUser', async (payload, thunkApi) => {
  try {
    const { data } = await UsersServices.addUser(payload);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue('Ошибка! Не удалось добавить пользователя');
  }
});

// Удаление пользоватял
export const deleteUserAsync = createAsyncThunk('users/deleteUser', async (payload, thunkApi) => {
  try {
    const { data } = await UsersServices.deleteUser(payload);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue('Ошибка! Не удалось удалить пользователя');
  }
});
