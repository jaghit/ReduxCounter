import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../../reducers';

const createRNReduxStore = applyMiddleware()(createStore);

const createStore = createRNReduxStore(rootReducer);

export default createStore;
