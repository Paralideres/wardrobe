import { requestUsers } from '../requesters/users';

export function getUsers() {
  return function thunk(dispatch) {
    return requestUsers().then(result => {
      dispatch({
        type: 'REQUEST_USERS',
        payload: result,
      });
    });
  };
}

export function getCurrentUser() {

}
