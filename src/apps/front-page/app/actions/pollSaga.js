import { delay, takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { fetchLastPoll } from 'common/requesters/poll';

function* requestPoll() {
  const poll = yield call(fetchLastPoll);
  yield put({type: 'RECEIVE_POLL', payload: poll});
}

export default function* watchPollRequest() {
  yield* takeEvery('REQUEST_POLL', requestPoll);
}
