
const genreFilter = {
  ALL: `All genres`,
  COMEDY: `Comedies`,
  CRIME: `Crime`,
  DOCUMENTARY: `Documentary`,
  DRAMA: `Dramas`,
  HORROR: `Horror`,
  KIDS: `Kids & Family`,
  ROMANCE: `Romance`,
  SCI_FI: `Sci-Fi`,
  THRILLER: `Thrillers`,
};

const genreFilterArray = Object.values(genreFilter).filter((el, i, arr) => arr.indexOf(el) === i);

const MAX_GENRES_NUM = 8;

export {genreFilter, genreFilterArray, MAX_GENRES_NUM};
