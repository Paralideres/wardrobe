import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { fetchBlogPosts } from '../requesters/blog';

function* requestBlogPosts() {
  const posts = yield call(fetchBlogPosts);
  console.log(posts);
  yield put({type: 'RECEIVE_BLOG_POSTS', payload: posts});
}

export default function* watchBlogRequest() {
  yield* takeEvery('REQUEST_BLOG_POSTS', requestBlogPosts);
}
