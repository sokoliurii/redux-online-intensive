import { usersActions } from '../actions';

import { types } from '../types';

describe('users actions:', () => {
    test('fillUsers', () => {
        expect(usersActions.fillUsers(__.usersData)).toEqual({
            type: types.FILL_USERS,
            payload: __.usersData
        });
    });

    test('clearUsers', () => {
        expect(usersActions.clearUsers()).toEqual({
            type: types.CLEAR_USERS
        });
    });

    test('fetchUsersAsync', () => {
        expect(usersActions.fetchUsersAsync()).toEqual({
            type: types.FETCH_USERS_ASYNC
        });
    });
});