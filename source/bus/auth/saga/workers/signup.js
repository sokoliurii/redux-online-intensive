import { put, apply } from 'redux-saga/effects';

import { api } from '../../../../REST';
import { authAction } from '../../../auth/actions';
import { uiActions } from '../../../ui/actions';
import { profileActions } from '../../../profile/actions';

export function* signup({payload: userInfo}) {
	try {
		yield put(uiActions.startFetching());
		
		const response = yield apply(api, api.auth.createUser, [userInfo]);
		const { data: profile, message } = yield apply(response, response.json);
		
		if(response.status !== 200) {
			throw new Error(message);
		}
		
		yield put(profileActions.fillProfile(profile));
		yield put(authAction.authentificate());
	} catch(error) {
		console.log(error, 'signup worker');
	} finally {
		yield put(uiActions.stopFetching());
	}
}