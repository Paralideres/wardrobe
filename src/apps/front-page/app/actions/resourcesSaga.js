import { delay, takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { fetchResources } from 'common/requesters/resources';

function* requestResources() {
  const resources = yield call(fetchResources, 6);
  yield put({type: 'RECEIVE_RESOURCES', payload: resources});
}

export default function* watchResourcesRequest() {
  yield* takeEvery('REQUEST_RESOURCES', requestResources);
}
