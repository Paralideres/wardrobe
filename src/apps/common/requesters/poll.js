import { get } from '../utils/request';

export function fetchLastPoll() {
  return get(`/api/polls/last`).
    then(response => response.json());
}
