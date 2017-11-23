import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../../reducers';

const createRNReduxStore = applyMiddleware()(createStore);

const store = createRNReduxStore(rootReducer);

export default store;
