import { applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { customThunk } from './custom';

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

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnchancers = __DEV__ && devtools ? devtools : compose;

const middleware = [customThunk];

if(__DEV__) {
	middleware.push(logger);
}

const enchancedStore = composeEnchancers(applyMiddleware(...middleware));
export { enchancedStore }