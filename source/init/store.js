import { createStore } from 'redux';
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';
import { enchancedStore, sagaMiddleware } from './middleware/core';

export const store = createStore(rootReducer, enchancedStore);

sagaMiddleware.run(rootSaga);