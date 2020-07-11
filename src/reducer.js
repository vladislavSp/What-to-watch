import films from './mocks/films.js';
import {genreFilter} from './const/const.js';
import {extend} from './utils/utils.js';
import {getFilmsByFilter} from './utils/filter.js';

const initialState = {
  activeGenre: genreFilter.All,
  allFilms: films,
  showFilms: getFilmsByFilter(films, genreFilter.All),
};

const ActionType = {
  SET_JENRE: `SET_JENRE`,
  GET_FILMS: `GET_FILMS`
};

const ActionCreator = {
  setGenreType: (genreType) => ({
    type: ActionType.SET_JENRE,
    payload: genreType,
  }),

  getFilms: () => ({
    type: ActionType.GET_FILMS,
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_JENRE:
      if (state.activeGenre !== action.payload) {
        return extend(state, {activeGenre: action.payload});
      }
      break;
    case ActionType.GET_FILMS:
      const filteredMovies = getFilmsByFilter(state.allFilms, state.activeGenre);

      return extend(state, {showFilms: filteredMovies});
    default:

  }
  return state;
};

export {reducer, ActionCreator, ActionType};
