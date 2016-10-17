import { get } from '../utils/request';

export function fetchCategory(id) {
  return get(`/api/categories/${id}`).
    then(response => response.json());
}
