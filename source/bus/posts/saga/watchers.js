import { takeEvery, all, call } from 'redux-saga/effects';

import { types } from '../types';

import { createPost, fetchPosts, removePost } from './workers';

function* watchCreatePost() {
	yield takeEvery(types.CREATE_POSTS_ASYNC, createPost);
}

function* watchFetchPosts() {
	yield takeEvery(types.FETCH_POSTS_ASYNC, fetchPosts);
}

function* watchRemovePost() {
	yield takeEvery(types.REMOVE_POST_ASYNC, removePost);
}

export function* watchPosts() {
	yield all([
		call(watchCreatePost),
		call(watchFetchPosts),
		call(watchRemovePost),
	]);
}