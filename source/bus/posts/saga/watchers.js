import { takeEvery, all, call } from 'redux-saga/effects';

import { types } from '../types';

import { createPost, fetchPosts } from './workers';

function* watchCreatePost() {
	yield takeEvery(types.CREATE_POSTS_ASYNC, createPost);
}

function* watchFetchPosts() {
	yield takeEvery(types.FETCH_POSTS_ASYNC, fetchPosts);
}

export function* watchPosts() {
	yield all([
		call(watchCreatePost),
		call(watchFetchPosts),
	]);
}