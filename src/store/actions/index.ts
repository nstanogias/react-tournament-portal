import { ActionType } from '../action-types';
import { Tournament } from '../reducers';

interface GetTournamentsStartAction {
  type: ActionType.GET_TOURNAMENTS_START;
}

interface GetTournamentsSuccessAction {
  type: ActionType.GET_TOURNAMENTS_SUCCESS;
  payload: Tournament[];
}

interface GetTournamentsErrorAction {
  type: ActionType.GET_TOURNAMENTS_ERROR;
  payload: string;
}

interface AddTournamentAction {
  type: ActionType.ADD_TOURNAMENT;
  payload: Tournament;
}

interface UpdateTournamentAction {
  type: ActionType.UPDATE_TOURNAMENT;
  payload: Tournament;
}

interface DeleteTournamentAction {
  type: ActionType.DELETE_TOURNAMENT;
  payload: string;
}

export type Action =
  | GetTournamentsStartAction
  | GetTournamentsSuccessAction
  | GetTournamentsErrorAction
  | AddTournamentAction
  | UpdateTournamentAction
  | DeleteTournamentAction;
