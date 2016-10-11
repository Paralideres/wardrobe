import { get } from '../utils/request';

export function fetchResource(id) {
  return get(`/api/resources/${id}`).
    then(response => response.json());
}
