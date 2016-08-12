import { requestLogin } from '../requesters/currentUser';
import { push } from 'react-router-redux';

export function sendCredentials(credentials) {
  return function actionThunk(dispatch) {
    return requestLogin(credentials)
      .then(() => dispatch(push('/')));
  };
}
