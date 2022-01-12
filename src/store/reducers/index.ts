import { ActionType } from '../action-types';
import { Action } from '../actions';

export interface Tournament {
  id: string;
  name: string;
  organizer: string;
  game: string;
  participants: { current: number; max: number };
  startDate: string;
}

export interface TournamentsState {
  tournaments: Tournament[];
  loading: boolean;
  error: string | null;
}

const initialState: TournamentsState = {
  tournaments: [],
  loading: false,
  error: null
};

const tournamentsReducer = (
  state: TournamentsState = initialState,
  action: Action
): TournamentsState => {
  switch (action.type) {
    case ActionType.GET_TOURNAMENTS_START:
      return {
        ...state,
        loading: true
      };
    case ActionType.GET_TOURNAMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        tournaments: action.payload
      };
    case ActionType.GET_TOURNAMENTS_ERROR:
      return {
        loading: false,
        tournaments: [...state.tournaments],
        error: action.payload
      };
    case ActionType.ADD_TOURNAMENT:
      return {
        ...state,
        tournaments: [...state.tournaments, action.payload]
      };
    case ActionType.UPDATE_TOURNAMENT:
      return {
        ...state,
        tournaments: state.tournaments.map(tournament =>
          tournament.id === action.payload.id
            ? { ...tournament, ...action.payload }
            : tournament
        )
      };
    case ActionType.DELETE_TOURNAMENT:
      return {
        ...state,
        tournaments: state.tournaments.filter(
          tournament => tournament.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export default tournamentsReducer;
