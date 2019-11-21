import { put, apply } from 'redux-saga/effects';
import { change } from 'react-redux-form';

import { api } from '../../../../REST';
import { uiActions } from '../../../ui/actions';
import { profileActions } from '../../actions';

export function* updateAvatar({payload: [newAvatar]}) {
	try {
		yield put(uiActions.startFetching());
		const avatarFormData = yield new FormData();
		yield apply(avatarFormData, avatarFormData.append, ['avatar', newAvatar]);
		
		const response = yield apply(api, api.profile.updateAvatar, [avatarFormData]);
		const { data: newAvatarUrl, message } = yield apply(response, response.json);
		
		if(response.status !== 200) {
			throw new Error(message);
		}
		
		yield put(profileActions.updateAvatar(newAvatarUrl));
		yield put(actions.reset('forms.user.profile.avatar'))
	} catch(error) {
		console.log(error, 'updateAvatar');
	} finally {
		yield put(uiActions.stopFetching());
	}
}