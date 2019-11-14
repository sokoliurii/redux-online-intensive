import { types } from './types';

export const authAction = {
	authentificate: () => {
		return {
			type: types.AUTHENTIFICATE,
		}
	},

	initialize: () => {
		return {
			type: types.INITIALIZE,
		}
	},

	logout: () => {
		return {
			type: types.LOGOUT,
		}
	},
	
	signupAsync: (userData) => {
		return {
			type: types.SIGNUP_ASYNC,
			payload: userData,
		}
	},
	
	loginAsync: (userData) => {
		return {
			type: types.LOGIN_ASYNC,
			payload: userData,
		}
	},
	
	authentificateAsync: () => {
		return {
			type: types.AUTHENTIFICATE_ASYNC,
		}
	},

	initializeAsync: () => {
		return {
			type: types.INITIALIZE_ASYNC,
		}
	},

	logoutAsync: () => {
		return {
			type: types.LOGOUT_ASYNC,
		}
	},
}