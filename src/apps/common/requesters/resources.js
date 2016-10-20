import { get } from '../utils/request';

export function fetchResources(limit = 20) {
  return get(`/api/resources?limit=${limit}`).
    then(response => response.json());
}

export function fetchResource(id) {
  return get(`/api/resources/${id}`).
    then(response => response.json());
}
