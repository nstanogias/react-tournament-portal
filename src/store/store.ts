import { createStore, applyMiddleware } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Action } from './actions';
import tournamentsReducer, { TournamentsState } from './reducers';

export const store = createStore(tournamentsReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<TournamentsState, any, Action>;
