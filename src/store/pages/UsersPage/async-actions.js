import { createAsyncThunk } from '@reduxjs/toolkit';
import { UsersService } from 'services/Users';

// Получение списка пользователей
// export const FETCH_USERS = 'FETCH_USERS';
// export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
// export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

// export const fetchUsersAction = () => ({ type: FETCH_USERS });
// export const fetchUsersActionSuccess = (payload) => ({ type: FETCH_USERS_SUCCESS, payload });
// export const fetchUsersActionFailure = (payload) => ({ type: FETCH_USERS_FAILURE, payload });

// const { fetchUsers, fetchUsersSuccess, fetchUsersFailure } = usersSlice.actions;
// export const fetchUsersAsync = () => async (dispatch) => {
//   try {
//     dispatch(fetchUsers());
//     const result = await UsersService.getUsers();
//     setTimeout(() => {
//       dispatch(fetchUsersSuccess(result.data));
//     }, 500);
//   } catch (error) {
//     dispatch(fetchUsersFailure(error));
//   }
// };

export const fetchUsersAsync = createAsyncThunk('users/fetchUsers', async (_, thunkApi) => {
  try {
    const result = await UsersService.getUsers();
    return result.data;
  } catch (error) {
    return thunkApi.rejectWithValue('Ошибка! Не удалось получить данные');
  }
});
// // Добавление пользователя
// export const ADD_USER = 'ADD_USER';
// export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
// export const ADD_USER_FAILURE = 'ADD_USER_FAILURE';

// export const addUser = (payload) => ({ type: ADD_USER, payload });
// export const addUserSuccess = (payload) => ({ type: ADD_USER_SUCCESS, payload });
// export const addUserFailure = (payload) => ({ type: ADD_USER_SUCCESS, payload });

// export const addUserAsync = (payload) => async (dispatch) => {
//   try {
//     dispatch(addUser(payload));
//     const response = await UsersService.addUser(payload);
//     dispatch(addUserSuccess(response.data));
//   } catch (error) {
//     dispatch(addUserFailure(payload));
//   }
// };
// // Удаление пользователя
// export const DELETE_USER = 'DELETE_USER';
// export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
// export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';

// export const deleteUser = (payload) => ({ type: DELETE_USER, payload });
// export const deleteUserSuccess = () => ({ type: DELETE_USER_SUCCESS });
// export const deleteUserFailure = (payload) => ({ type: DELETE_USER_FAILURE, payload });

// export const deleteUserAsync = (payload) => async (dispatch) => {
//   try {
//     dispatch(deleteUser(payload));
//     await UsersService.deleteUser(payload);
//     dispatch(deleteUserSuccess());
//     dispatch(fetchUsersAsync());
//   } catch (error) {
//     dispatch(deleteUserFailure(error));
//   }
// };
