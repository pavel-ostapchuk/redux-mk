// import { UsersService } from './users-service';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { UsersService } from './users-service';

// Vanilla Redux
// export const FETCH_USERS = 'FETCH_USERS';
// export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCES';
// export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

// export const fetchUsers = () => ({ type: FETCH_USERS });
// export const fetchUsersSuccess = (payload) => ({ type: FETCH_USERS_SUCCESS, payload });
// export const fetchUsersFailure = (payload) => ({ type: FETCH_USERS_FAILURE, payload });

// export const fetchUsersAsync = () => async (dispatch) => {
//   try {
//     dispatch(fetchUsers());
//     const { data } = await UsersService.getUsers();
//     dispatch(fetchUsersSuccess(data));
//   } catch (error) {
//     console.error(error);
//     dispatch(fetchUsersFailure('Ошибка!'));
//   }
// };

// =========================================================
// Redux-Toolkit

export const fetchUsersAsync = createAsyncThunk('user/fetchUsers', async (_, thunkApi) => {
  try {
    const { data } = await UsersService.getUsers();
    return data;
  } catch (error) {
    console.error(error);
    return thunkApi.rejectWithValue('Ошибка!');
  }
});
