import { postUser } from 'common/requesters/users';

export function setUser(data) {
  return (dispatch) =>
    postUser(data).then(result =>
      dispatch({
        type: 'RECEIVE_NEW_USER',
        payload: result,
      })
    );
}
