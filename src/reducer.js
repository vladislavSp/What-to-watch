import {films, promoFilm} from './mocks/films.js';
import {genreFilter} from './const/const.js';
import {extend} from './utils/utils.js';
import {getFilmsByFilter} from './utils/filter.js';

const initialState = {
  activeGenre: genreFilter.ALL,
  allFilms: films,
  promoFilm,
  showFilms: getFilmsByFilter(films, genreFilter.ALL),
};

const ActionType = {
  SET_JENRE: `SET_JENRE`,
  GET_FILTER_FILMS: `GET_FILTER_FILMS`
};

const ActionCreator = {
  setGenreType: (genreType) => ({
    type: ActionType.SET_JENRE,
    payload: genreType,
  }),

  getFilterFilms: () => ({
    type: ActionType.GET_FILTER_FILMS,
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_JENRE:
      if (state.activeGenre !== action.payload) {
        return extend(state, {activeGenre: action.payload});
      }
      break;
    case ActionType.GET_FILTER_FILMS:
      const filteredMovies = getFilmsByFilter(state.allFilms, state.activeGenre);

      return extend(state, {showFilms: filteredMovies});
    default:
      return state;
  }
};

export {reducer, ActionCreator, ActionType};
