import {reducer, ActionCreator, ActionType} from "./reducer.js";
import {genreFilter} from "./const/const.js";

const films = [
  {
    src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts`,
    genre: `Comedy`,
    videoPreview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Bohemian Rhapsody`,
    genre: `Documentary`,
    videoPreview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Macbeth`,
    genre: `Comedy`,
    videoPreview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Aviator`,
    genre: `Drama`,
    videoPreview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `We need to talk about Kevin`,
    genre: `Thriller`,
    videoPreview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Shutter Island`,
    genre: `Horror`,
    videoPreview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `No Country for Old Men`,
    genre: `Romance`,
    videoPreview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Snatch`,
    genre: `Sci-fi`,
    videoPreview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  }
];

const promoFilm = {
  promoTitle: `The Grand Budapest Hotel`,
  promoGenre: `Comedy/Drama`,
  promoYear: 2014,
};

const horrorFilm = [{
  src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  title: `Shutter Island`,
  genre: `Horror`,
  videoPreview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
}];

describe(`Reducer work correctly`, () => {
  it(`Reducer without add parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      activeGenre: `All genres`,
      allFilms: films,
      promoFilm,
      showFilms: films,
    });
  });

  it(`Reducer should change filter`, () => {
    expect(reducer({
      activeGenre: genreFilter.ALL,
    },
    {
      type: ActionType.SET_JENRE,
      payload: `Comedy`,
    }
    )).toEqual({
      activeGenre: `Comedy`,
    });
  });

  it(`Reducer should get films`, () => {
    expect(reducer({
      activeGenre: `Horror`,
      allFilms: films,
      promoFilm,
      showFilms: films,
    },
    {
      type: ActionType.GET_FILMS,
    })).toEqual({
      activeGenre: `Horror`,
      allFilms: films,
      promoFilm,
      showFilms: horrorFilm,
    });
  });
});


describe(`ActionCreators work correctly`, () => {
  it(`Action creator - for setting genre`, () => {
    expect(ActionCreator.setGenreType(`Horror`)).toEqual({
      type: ActionType.SET_JENRE,
      payload: `Horror`,
    });
  });

  it(`Action creator - for getting films`, () => {
    expect(ActionCreator.getFilms()).toEqual({
      type: ActionType.GET_FILMS,
    });
  });
});
