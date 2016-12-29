import { get, post } from '../utils/request';

export function requestUsers() {
  return get('/api/users').
    then(response => response.json());
}

export function postUser(data) {
  return post('/api/users', data).
    then(response => response.json());
}
