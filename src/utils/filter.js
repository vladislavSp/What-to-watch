import {genreFilter} from '../const/const.js';

const getFiltersFilms = (filterFilms, filter) => {
  return filterFilms.filter((film) => film.genre === filter);
};

export const getFilmsByFilter = (films, filter) => {
  if (filter === genreFilter.ALL) {
    return films;
  } else {
    return getFiltersFilms(films, filter);
  }
};
