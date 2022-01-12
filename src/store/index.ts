import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import tournamentsReducer from './reducers';

const store = createStore(tournamentsReducer, applyMiddleware(thunk));

export default store;
