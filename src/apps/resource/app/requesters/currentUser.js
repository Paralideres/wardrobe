import { post } from '../utils/request';

export function requestLogin(credentials) {
  return post('/api/account/login', credentials).
    then(response => response.json());
}
