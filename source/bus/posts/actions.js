import { types } from './types';

import { api } from '../../REST';

export const postsActions = {
	fillPosts: (posts) => {
		return {
			type: types.FILL_POSTS,
			payload: posts,
		}
	},

	createPost: (post) => {
		return {
			type: types.CREATE_POST,
			payload: post,
		}
	},

	clearPosts: () => {
		return {
			type: types.CLEAR_POSTS,
		}
	},

	removePost: (id) => {
		return {
			type: types.REMOVE_POST,
			payload: id,
		}
	},

	fetchPostsAsync: () => {
		return {
			type: types.FETCH_POSTS_ASYNC,
		};
	},

	createPostAsync: (comment) => {
		return {
			type: types.CREATE_POSTS_ASYNC,
			payload: comment
		};
	},

	removePostAsync: (id) => {
		return {
			type: types.REMOVE_POST_ASYNC,
			payload: id,
		};
	},
}