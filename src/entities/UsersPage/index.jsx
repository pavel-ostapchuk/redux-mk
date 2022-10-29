import { $api } from 'api/axios-instance';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersAsync } from 'store/UsersPage/actions';
import { getUsersStateSelector } from 'store/UsersPage/selectors';

const UsersPage = () => {
  // Without Redux
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [usersList, setUsersList] = useState([]);

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

  // ====================================

  // Vanilla Redux
  const dispatch = useDispatch();
  const { loading, usersData } = useSelector(getUsersStateSelector);

  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, [dispatch]);

  return loading ? (
    <div>Загрузка...</div>
  ) : (
    <div>
      {usersData?.map(({ id, name }) => (
        <div key={id}>{name}</div>
      ))}
    </div>
  );
};
export default UsersPage;
