import axios from 'axios';
import { Dispatch } from 'redux';
import { API_TOURNAMENTS_URL } from '../../constants/api';
import { ActionType } from '../action-types';
import { Action } from '../actions';
import { Tournament } from '../reducers';

export const getTournaments = (filter: string) => async (
  dispatch: Dispatch<Action>
) => {
  dispatch({
    type: ActionType.GET_TOURNAMENTS_START
  });

  axios
    .get(`${API_TOURNAMENTS_URL}`)
    .then(response => {
      const tournaments = response.data;
      dispatch({
        type: ActionType.GET_TOURNAMENTS_SUCCESS,
        payload: tournaments.filter((tournament: Tournament) =>
          tournament.name.toLowerCase().includes(filter)
        )
      });
    })
    .catch(error => {
      dispatch({
        type: ActionType.GET_TOURNAMENTS_ERROR,
        payload: error.message
      });
    });
};

export const addTournament = (name: string) => async (
  dispatch: Dispatch<Action>
) => {
  axios
    .post(`${API_TOURNAMENTS_URL}`, { name })
    .then(response => {
      const newTournament = response.data;
      dispatch({
        type: ActionType.ADD_TOURNAMENT,
        payload: newTournament
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const editTournament = (tournament: Tournament) => async (
  dispatch: Dispatch<Action>
) => {
  axios
    .put(`${API_TOURNAMENTS_URL}/${tournament.id}`, tournament)
    .then(response => {
      dispatch({
        type: ActionType.UPDATE_TOURNAMENT,
        payload: tournament
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const deleteTournament = (id: string) => async (
  dispatch: Dispatch<Action>
) => {
  axios
    .delete(`${API_TOURNAMENTS_URL}/${id}`)
    .then(response => {
      dispatch({
        type: ActionType.DELETE_TOURNAMENT,
        payload: id
      });
    })
    .catch(error => {
      console.log(error);
    });
};
