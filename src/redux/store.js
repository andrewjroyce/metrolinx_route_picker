import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducers/allReducers';
import Async from './middlewares/async';

const store = createStore(allReducers, {}, applyMiddleware(Async)); //add a second param here to hydrate the redux state, maybe from firebase?

export default store;