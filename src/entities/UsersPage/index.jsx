import { $api } from 'api/axios-instance';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersAsync } from 'store/UsersPage/actions';
import { getUsersListSelector } from 'store/UsersPage/selectors';

const UsersPage = () => {
  // Запрос без redux
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [usersList, setUsersList] = useState([]);

  //   const getUsers = async () => {
  //     try {
  //       setIsLoading(true);
  //       const { data } = await $api.get('/users');
  //       setUsersList(data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       setIsLoading(false);
  //       console.log('Ошибка:', error);
  //     }
  //   };

  //   useEffect(() => {
  //     getUsers();
  //   }, []);

  // Запрос с redux
  const dispatch = useDispatch();
  const { users, loading } = useSelector(getUsersListSelector);
  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, [dispatch]);

  return loading ? (
    <div>Загрузка...</div>
  ) : (
    <div>
      {users.map(({ id, name }) => (
        <div key={id}>{name}</div>
      ))}
    </div>
  );
};

export default UsersPage;
