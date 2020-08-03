import {parseFilm, parseFilms} from '../../adapters/films-adapter.js';
import {extend, replaceMovie, replacePromo} from '../../utils/utils.js';

const initialState = {
  allFilms: [],
  promoFilm: {},
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO: `LOAD_PROMO`,
  UPDATE_MOVIE: `UPDATE_MOVIE`,
};

const ActionCreator = {
  loadFilms: (allFilms) => ({
    type: ActionType.LOAD_FILMS,
    payload: allFilms,
  }),

  loadPromo: (promoFilm) => ({
    type: ActionType.LOAD_PROMO,
    payload: promoFilm,
  }),

  updateMovie: (movie) => ({
    type: ActionType.UPDATE_MOVIE,
    payload: movie,
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
  },

  changeFavorStatus: (movie) => (dispatch, getState, api) => {
    return api.post(`/favorite/${movie.id}/${+!movie.inFavorites}`)
      .then(({data}) => {
        dispatch(ActionCreator.updateMovie(data));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {allFilms: action.payload});
    case ActionType.LOAD_PROMO:
      return extend(state, {promoFilm: action.payload});
    case ActionType.UPDATE_MOVIE:
      const updatedMovie = parseFilm(action.payload);
      return extend(state, {
        allFilms: replaceMovie(updatedMovie, state.allFilms),
        promoFilm: replacePromo(updatedMovie, state.promoFilm)
      });
  }

  return state;
};

export {reducer, Operation, ActionCreator, ActionType};
