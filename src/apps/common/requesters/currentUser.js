import { get, post, toJson } from '../utils/request';

export function requestLogin(credentials) {
  return post('/api/account/login', credentials).
    then(toJson);
}

export function getCurrentUser() {
  return get('/api/account').
    then(toJson);
}
