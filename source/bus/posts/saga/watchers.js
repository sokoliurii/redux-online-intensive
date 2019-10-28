import { takeEvery, all, call } from 'redux-saga/effects';

import { CREATE_POSTS_ASYNC } from '../types';

import { createPost } from './workers';

function* watchCreatePost() {
	yield takeEvery(CREATE_POSTS_ASYNC, createPost);
}

export function* watchPosts() {
	yield all([call(watchCreatePost)]);
}