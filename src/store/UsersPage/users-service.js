import { $api } from 'api/axios-instance';

export const UsersService = {
  getUsers: () => $api.get('/users'),
};
