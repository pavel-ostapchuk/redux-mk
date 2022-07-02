import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersAsync } from 'store/pages/UsersPage/async-actions';
import style from './index.module.scss';

const UsersPage = () => {
  const [userFormData, setUserformData] = useState({ name: '' });
  //   const [usersData, setUsersData] = useState(null);
  //   const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //     const getUsers = async () => {
  //       try {
  //         setLoading(true);
  //         const { data } = await UsersService.getUsers();
  //         await setUsersData(data);
  //         setLoading(false);
  //       } catch (error) {
  //         setLoading(false);
  //         console.log(error);
  //       }
  //     };

  //     getUsers();
  //   }, []);

  const dispatch = useDispatch();
  const { usersData, loading, error } = useSelector((state) => state.usersReducer);

  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, [dispatch]);

  //   const handleFormSubmit = (event) => {
  //     event.preventDefault();
  //     dispatch(addUserAsync(userFormData));
  //   };
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {/* <form className={style.add_user_form} action="submit">
        <input
          name="name"
          type="text"
          onChange={(event) => setUserformData((prev) => ({ ...prev, name: event.target.value }))}
        />
        <input
          name="surname"
          type="text"
          onChange={(event) =>
            setUserformData((prev) => ({ ...prev, surname: event.target.value }))
          }
        />
        <button type="submit" onClick={handleFormSubmit}>
          Добавить
        </button>
      </form> */}
      <hr />

      {loading ? (
        <div>Загрузка</div>
      ) : (
        <div className={style.users_container}>
          {usersData?.map((user) => (
            <div key={user.id} className={style.user}>
              <div className={style.user_name}>{user.name}</div>
              {/* <button type="button" onClick={() => dispatch(deleteUserAsync(user.id))}>
                Удалить
              </button> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UsersPage;
