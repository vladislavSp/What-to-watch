export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const formatingTime = (sec) => {
  return new Date(sec * 1000).toISOString().substr(11, 8);
};

export const replaceMovie = (movie, movies) => {
  const index = movies.findIndex((oldMovie) => oldMovie.id === movie.id);
  movies.splice(index, 1, movie);
  return movies;
};

export const replacePromo = (updatedMovie, promoMovie) => {
  return updatedMovie.id === promoMovie.id ? updatedMovie : promoMovie;
};
