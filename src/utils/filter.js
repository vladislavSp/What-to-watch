import genreFilter from '../const/const.js';

const getFiltersFilms = (filterFilms, filter) => {
  return filterFilms.filter((film) => film.genre === filter);
};

const getFilmsByFilter = (films, filter) => {
  switch (filter) {
    case genreFilter.ALL:
      return films;
    case genreFilter.COMEDY:
      return getFiltersFilms(films, `Comedy`);
    case genreFilter.CRIME:
      return getFiltersFilms(films, `Crime`);
    case genreFilter.DOCUMENTARY:
      return getFiltersFilms(films, `Documentary`);
    case genreFilter.DRAMA:
      return getFiltersFilms(films, `Drama`);
    case genreFilter.HORROR:
      return getFiltersFilms(films, `Horror`);
    case genreFilter.KIDS:
      return getFiltersFilms(films, `Kids & Family`);
    case genreFilter.ROMANCE:
      return getFiltersFilms(films, `Romance`);
    case genreFilter.SCI_FI:
      return getFiltersFilms(films, `Sci-Fi`);
    case genreFilter.THRILLER:
      return getFiltersFilms(films, `Thrillers`);
    default:
      return Object.assign({}, films);
  }
};

export {getFilmsByFilter};
