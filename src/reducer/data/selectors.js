import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.DATA;

export const getAllFilms = (state) => {
  return state[NAME_SPACE].allFilms;
};

export const getPromoFilm = (state) => {
  return state[NAME_SPACE].promoFilm;
};

export const getCurrentMovieById = (state, movieId) => {
  return state[NAME_SPACE].allFilms.find((movie) => movie.id === movieId);
};

export const getFilteredGenreFilm = (state, currentMovie) => {
  return getAllFilms(state)
    .filter(
        (el) => el.id !== currentMovie.id && el.genre === currentMovie.genre
    )
    .slice(0, 4);
};

export const getComments = (state) => {
  return state[NAME_SPACE].comments;
};
