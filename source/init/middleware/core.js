import { applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import { customThunk } from './custom';
import createSagaMiddleware from 'redux-saga';

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

const history = createBrowserHistory();
const routerMiddleware = createRouterMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnchancers = __DEV__ && devtools ? devtools : compose;

const middleware = [sagaMiddleware, customThunk, routerMiddleware];

if(__DEV__) {
	middleware.push(logger);
}

const enchancedStore = composeEnchancers(applyMiddleware(...middleware));
export { enchancedStore, sagaMiddleware, history }