import { takeEvery, all, call } from 'redux-saga/effects';

import { types } from '../types';

import { signup, login, authentificate, initialize, logout } from './workers';

function* watchSignup() {
	yield takeEvery(types.SIGNUP_ASYNC, signup);
}

function* watchLogin() {
	yield takeEvery(types.LOGIN_ASYNC, login);
}

function* watchAuthentificate() {
	yield takeEvery(types.AUTHENTIFICATE_ASYNC, authentificate);
}

function* watchInitialize() {
	yield takeEvery(types.INITIALIZE_ASYNC, initialize);
}

function* watchLogout() {
	yield takeEvery(types.LOGOUT_ASYNC, logout);
}

export function* watchAuth() {
	yield all([
		call(watchSignup),
		call(watchLogin),
		call(watchAuthentificate),
		call(watchInitialize),
		call(watchLogout),
	]);
}