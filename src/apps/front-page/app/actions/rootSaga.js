import pollSaga from './pollSaga';
import resourcesSaga from './resourcesSaga';
import blogSaga from './blogSaga';

export default function* rootSaga() {
  yield [
    pollSaga(),
    resourcesSaga(),
    blogSaga()
  ];
}
