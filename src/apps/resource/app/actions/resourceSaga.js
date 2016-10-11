import { delay, takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { fetchResource } from 'common/requesters/resources';

function* requestResource(action) {
  const resource = yield call(fetchResource, action.id);
  yield put({type: 'RECEIVE_RESOURCE', payload: resource});
}

function* watchResourceRequest() {
  yield* takeEvery('REQUEST_RESOURCE', requestResource);
}

export default function* rootSaga() {
  yield watchResourceRequest();
}
