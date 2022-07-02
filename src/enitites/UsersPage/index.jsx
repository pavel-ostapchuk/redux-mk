import { $api } from 'api/axios-instance';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUserAsync, fetchUsersAsync, deleteUserAsync } from 'store/UsersPage/async-actions';
import { getUsersStore } from 'store/UsersPage/selectors';
import style from './index.module.scss';

const UsersPage = () => {
  //   const [usersData, setUsersData] = useState(null);
  //   const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //     const getUsers = async () => {
  //       try {
  //         setLoading(true);
  //         const { data } = await $api.get('/users');
  //         setUsersData(data);
  //         setLoading(false);
  //       } catch (error) {
  //         console.log(error);
  //         setLoading(false);
  //       }
  //     };
  //     getUsers();
  //   }, []);
  const [newUserFormData, setNewUserFormData] = useState({ name: '' });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, [dispatch]);

  const { usersData, loading, error } = useSelector(getUsersStore);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(newUserFormData);
    dispatch(addUserAsync(newUserFormData));
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <form action="sumbit" className={style.form_wrapper}>
        <input
          name="name"
          type="text"
          value={newUserFormData.name}
          onChange={(event) => setNewUserFormData({ ...newUserFormData, name: event.target.value })}
        />
        {/* <input
          name="surname"
          type="text"
          value={newUserFormData.surname}
          onChange={(event) =>
            setNewUserFormData({ ...newUserFormData, surname: event.target.value })
          }
        /> */}
        <button type="submit" onClick={handleFormSubmit}>
          Добавить
        </button>
      </form>
      <hr />
      {loading ? (
        'Загрузка'
      ) : (
        <div className={style.users_list}>
          {usersData?.map((user) => (
            <div key={`${user.id}:${user.name}`} className={style.user_wrapper}>
              <div className={style.user_name}>{user.name}</div>
              <button type="button" onClick={() => dispatch(deleteUserAsync(user.id))}>
                Удалить
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UsersPage;
