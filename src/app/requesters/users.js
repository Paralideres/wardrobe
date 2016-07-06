import { get } from '../utils/request';

export function requestUsers() {
  return get('/api/users').
    then(response => response.json());
}
