import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com';

export const $api = axios.create({
  timeout: 10000,
  baseURL,
  header: {
    Authorization: '',
  },
});
