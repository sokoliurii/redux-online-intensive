import { types } from './types';

export const authAction = {
	authentificate: () => {
		return {
			type: types.AUTHENTIFICATE,
		}
	},

	signupAsync: (userData) => {
		return {
			type: types.SIGNUP_ASYNC,
			payload: userData,
		}
	},
}