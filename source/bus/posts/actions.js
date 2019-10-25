import { FILL_POSTS, CREATE_POST, FETCH_POSTS_ASYNC, CREATE_POSTS_ASYNC } from './types';

import { api } from '../../REST';

export const fillPosts = (posts) => {
	return {
		type: FILL_POSTS,
		payload: posts,
	}
}

export const createPost = (post) => {
	return {
		type: CREATE_POST,
		payload: post,
	}
}

export const fetchPostsAsync = () => async(dispatch, getState) => {
	dispatch({
		type: FETCH_POSTS_ASYNC
	});

	const response = await api.posts.fetch();
	const result = await response.json();

	console.log(response);
	console.log(result);

	dispatch(fillPosts(result.data))
}

export const createPostAsync = (comment) => async(dispatch, getState) => {
	dispatch({
		type: CREATE_POSTS_ASYNC
	});

	const response = await api.posts.create(comment);
	const result = await response.json();

	console.log(response);
	console.log(result);

	dispatch(createPost(result.data))
}