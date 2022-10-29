import { $api } from 'api/axios-instance';

export const UsersServices = {
  getUsers: () => $api.get('/users'),
  addUser: (newUserData) => $api.post('/users', newUserData),
  deleteUser: (id) => $api.delete(`/users/${id}`),
};
