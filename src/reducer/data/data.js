import {parseFilm, parseFilms} from '../../adapters/films-adapter.js';
import {extend} from '../../utils/utils.js';

const initialState = {
  allFilms: [],
  promoFilm: null,
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO: `LOAD_PROMO`,
};

const ActionCreator = {
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),

  loadPromo: (promo) => ({
    type: ActionType.LOAD_PROMO,
    payload: promo,
  }),
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
    .then((response) => {
      dispatch(ActionCreator.loadFilms(parseFilms(response.data)));
    });
  },

  loadPromo: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(ActionCreator.loadPromo(parseFilm(response.data)));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {allFilms: action.payload});
    case ActionType.LOAD_PROMO:
      return extend(state, {promo: action.payload});
  }

  return state;
};

export {reducer, Operation, ActionCreator, ActionType};
