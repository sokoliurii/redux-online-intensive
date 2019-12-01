import { fromJS, List } from 'immutable';

import { usersReducer } from '../reducer';

import { usersActions } from '../actions';

const initialState = List();

describe('users reducer:', () => {
    test('should return initial state by default', () => {
        expect(usersReducer(void 0, {})).toEqual(initialState);
    });

    test('should handle FILL_USERS action', () => {
        expect(usersReducer(void 0, usersActions.fillUsers(__.usersData))).toEqual(fromJS(__.usersData));
    });

    test('should handle CLEAR_USERS action', () => {
        expect(usersReducer(void 0, usersActions.clearUsers())).toEqual(initialState.clear());
    });
});