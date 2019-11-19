import { fromJS, List } from 'immutable';

import { types } from './types';
import { log } from 'util';

const initialState = List();

export const postsReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch(type) {
		case types.FILL_POSTS:
			return fromJS(payload);
		
		case types.CREATE_POST:
			return state.unshift(fromJS(payload));
		
		case types.CLEAR_POSTS:
			return state.clear();
		
		case types.REMOVE_POST:
			return state.filter(post => post.get('id') !== payload)
		
		case types.LIKE_POST:
			return state.updateIn([
				state.findIndex(post => {
					return post.get('id') === payload.postId;
				}),
				'likes'
			],
			likes => {
				return likes.unshift(payload.liker)
			})
		
		case types.UNLIKE_POST:
			return state.updateIn([
				state.findIndex(post => {
					return post.get('id') === payload.postId;
				}),
				'likes'
			],
			likes => {
				return likes.filter(liker => liker.get('id') !== payload.userId)
			})

		default:
			return state;
	}
}