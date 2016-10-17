import { delay, takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { fetchCategory } from 'common/requesters/category';

function* requestCategory(action) {
  const category = yield call(fetchCategory, action.id);
  yield put({type: 'RECEIVE_CATEGORY', payload: category});
}

function* watchResourceCategory() {
  yield* takeEvery('REQUEST_CATEGORY', requestCategory);
}

export default function* rootSaga() {
  yield watchResourceCategory();
}
