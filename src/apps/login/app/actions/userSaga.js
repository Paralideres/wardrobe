import { delay, takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { requestLogin } from '../requesters/currentUser';
import { push } from 'react-router-redux';

function* sendCredentials(action) {
  const login = yield call(requestLogin, action.payload);
  yield put(push('/'));
}

function* watchUser() {
  yield* takeEvery('REQUEST_LOGIN', sendCredentials);
}

export default function* rootSaga() {
  yield watchUser();
}
