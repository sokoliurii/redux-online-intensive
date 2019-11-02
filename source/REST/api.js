import { MAIN_URL, groupId } from './config';

export const api = {
	auth: {
		createUser(userInfo) {
			return fetch(`${MAIN_URL}/user/${groupId}`, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify(userInfo)
			})
		},
		
		login(userInfo) {
			return fetch(`${MAIN_URL}/user/login`, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify(userInfo)
			})
		},
	},
	posts: {
		fetch() {
			return fetch(`${MAIN_URL}/feed`, {
				method: 'GET',
				headers: {
					'x-no-auth': groupId,
				}
			})
		},

		create(comment) {
			return fetch(`${MAIN_URL}/feed`, {
				method: 'POST',
				headers: {
					'x-no-auth': groupId,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ comment })
			})
		}
	}
}