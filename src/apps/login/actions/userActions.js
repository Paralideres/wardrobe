import { requestLogin } from 'common/requesters/currentUser';

export function sendCredentials(data) {
  return (dispatch) =>
    requestLogin(data).then(result =>
      dispatch({
        type: 'RECEIVE_LOGIN',
        payload: result,
      })
    );
}
