export const parseFilm = (film) => {
  return {
    id: film[`id`].toString(),
    title: film[`name`],
    genre: film[`genre`],
    description: `${film[`description`]}`,
    actors: film[`starring`],
    producer: film[`director`],
    year: film[`released`],
    rating: film[`rating`],
    votes: film[`scores_count`],
    duration: film[`run_time`],
    inFavorites: film[`is_favorite`],
    posterImage: film[`poster_image`],
    previewImage: film[`preview_image`],
    video: film[`video_link`],
    videoPreview: film[`preview_video_link`],
    background: film[`background_image`],
    backgroundColor: film[`background_color`]
  };
};

export const parseFilms = (films) => {
  return films.map((film) => parseFilm(film));
};
