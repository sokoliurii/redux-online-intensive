import { createStore, combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import { postsReducer as posts } from '../../bus/posts/reducer';
import { uiReducer as ui } from '../../bus/ui/reducer';
import { authReducer as auth } from '../../bus/auth/reducer';
import { profileReducer as profile } from '../../bus/profile/reducer';
import { usersReducer as users } from '../../bus/users/reducer';
import { formsReducer as forms } from '../../bus/forms/reducer';

import { store } from '../store'

const referenceRootReducer = combineReducers({
	auth,
	profile,
	ui,
	posts,
	users,
	router,
	forms,
});

const referenceStore = createStore(referenceRootReducer);

describe('store:', () => {
    test('should have valid state shape', () => {
        expect(store.getState()).toEqual(referenceStore.getState());
    })
})