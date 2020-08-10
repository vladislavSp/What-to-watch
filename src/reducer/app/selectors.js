import NameSpace from "../name-space";
import {GenreFilter, MAX_GENRES_NUM} from "../../const/const";
import {getAllFilms} from "../data/selectors";
import {createSelector} from "reselect";

const NAME_SPACE = NameSpace.APP;

export const getActiveGenre = (state) => {
  return state[NAME_SPACE].activeGenre;
};

export const getCurrentPage = (state) => {
  return state[NameSpace.APP].currentAppPage;
};

export const getViewFilmCard = (state) => {
  return state[NameSpace.APP].filmLength;
};

export const getFavoritesMovies = (state) => {
  return state[NameSpace.DATA].allFilms.filter(({inFavorites}) => inFavorites);
};

export const getFilteredFilms = createSelector(
    getAllFilms,
    getActiveGenre,
    (allFilms, currentGenre) => {
      if (currentGenre === GenreFilter.ALL) {
        return allFilms;
      }
      return allFilms.filter((film) => film.genre === currentGenre);
    }
);

export const getGenres = createSelector(getAllFilms, (allFilms) => {
  const uniqueGenre = new Set();
  allFilms.forEach((film) => uniqueGenre.add(film.genre));
  const genres = Array.from(uniqueGenre);
  genres.sort().splice(MAX_GENRES_NUM);
  genres.unshift(GenreFilter.ALL);

  return genres;
});
