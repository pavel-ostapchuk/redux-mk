import { $api } from 'api/axios-instance';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersAsync } from 'store/UsersPage/actions';
import { getUsersStateSelector } from 'store/UsersPage/selectors';

const UsersPage = () => {
  // Без Redux
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [usersList, setUsersList] = useState(null);

  //   const getUsers = async () => {
  //     try {
  //       setIsLoading(true);
  //       const { data } = await $api.get('/users');
  //       setTimeout(() => {
  //         setUsersList(data);
  //         setIsLoading(false);
  //       }, 3000);
  //     } catch (error) {
  //       setIsLoading(false);
  //       console.error('Ошибка!', error);
  //     }
  //   };

  //   useEffect(() => {
  //     getUsers();
  //   }, []);

  // =======================================

  // Vanilla Redux
  const dispatch = useDispatch();
  const { loading, usersData } = useSelector(getUsersStateSelector);

  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, []);

  if (loading) return <div>Загрузка...</div>;

  return (
    <div>
      {usersData?.map(({ id, name }) => (
        <div key={id}>{name}</div>
      ))}
    </div>
  );
};
export default UsersPage;
