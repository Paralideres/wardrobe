import { get } from '../utils/request';

export function fetchResources() {
  return get(`/api/resources`).
    then(response => response.json());
}

export function fetchResource(id) {
  return get(`/api/resources/${id}`).
    then(response => response.json());
}
