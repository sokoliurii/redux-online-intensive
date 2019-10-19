import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';

import { rootReducer } from './rootReducer';

const logger = createLogger({
	duration: true,
	collapsed: true,
	colors: {
		title: () => '#1398FE',
		prevState: () => '#1C5FAF',
		action: () => '#149955',
		nextState: () => '#A47104',
		error: () => '#ff0004',
	}
});

const preloadedState = JSON.parse(localStorage.getItem('gallery'));
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnchancers = devtools ? devtools : compose;
const enchancedStore = composeEnchancers(applyMiddleware(logger));

export const store = preloadedState
 ? createStore(rootReducer, preloadedState, enchancedStore)
 : createStore(rootReducer, enchancedStore);

store.subscribe(() => {
	const state = store.getState();

	localStorage.setItem('gallery', JSON.stringify(state));
})