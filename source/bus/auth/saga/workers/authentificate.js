import { put, apply } from 'redux-saga/effects';
import { actions } from 'react-redux-form';

import { api } from '../../../../REST';
import { authAction } from '../../actions';
import { uiActions } from '../../../ui/actions';
import { profileActions } from '../../../profile/actions';

export function* authentificate() {
	try {
		yield put(uiActions.startFetching());
		
		const response = yield apply(api, api.auth.authentificate);
		const { data: profile, message } = yield apply(response, response.json);
		
		if(response.status !== 200) {
			if(response.status !== 200) {
				yield apply(localStorage, localStorage.removeItem, ['token']);
				yield apply(localStorage, localStorage.removeItem, ['remember']);

				return null;
			}

			throw new Error(message);
		}

		yield apply(localStorage, localStorage.setItem, ['token', profile.token]);
		
		yield put(profileActions.fillProfile(profile));
		yield put(actions.change('forms.user.profile.firstName', profile.firstName));
		yield put(actions.change('forms.user.profile.lastName', profile.lastName));
		yield put(authAction.authentificate());
	} catch(error) {
		console.log(error, 'authentificate worker');
	} finally {
		yield put(uiActions.stopFetching());
		yield put(authAction.initialize());
	}
}