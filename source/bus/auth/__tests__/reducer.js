import { Map } from 'immutable';

import { authReducer } from '../reducer';

import { authAction } from '../actions';

const initialState = Map({
    isAuthenticated: false,    
    isInitialized: false,    
});

describe('auth reducer:', () => {
    test('should return initial state by default', () => {
        expect(authReducer(void 0, {})).toEqual(initialState)
    });

    test('should handle AUTHENTICATE action', () => {
        expect(authReducer(void 0, authAction.authentificate())).toEqual(initialState.set('isAuthenticated', true));
    });

    test('should handle INITIALIZE action', () => {
        expect(authReducer(void 0, authAction.initialize())).toEqual(initialState.set('isInitialized', true));
    });

    test('should handle LOGOUT action', () => {
        expect(authReducer(void 0, authAction.logout())).toEqual(initialState.set('isAuthenticated', false));
    });
})