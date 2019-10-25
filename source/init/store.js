import { createStore } from 'redux';
import { rootReducer } from './rootReducer';
import { enchancedStore } from './middleware/core';

export const store = createStore(rootReducer, enchancedStore);
