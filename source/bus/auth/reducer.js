import { Map } from 'immutable';

import { types } from './types';

const initialState = Map({
	isAuthenticated: false,
});

export const authReducer = (state = initialState, action) => {
	switch(action.type) {
		case types.AUTHENTIFICATE:
			return state.set('isAuthenticated', true);

		default:
			return state;
	}
}