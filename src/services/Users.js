import { $api } from 'api/axios-instance';

export const UsersService = {
  getUsers: (_limit = 10) => $api.get('/users', { params: { _limit } }),
  addUser: (user) => $api.post('/users', user),
  deleteUser: (id) => $api.delete(`/users/${id}`),
};
