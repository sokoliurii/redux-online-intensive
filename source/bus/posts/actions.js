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
}