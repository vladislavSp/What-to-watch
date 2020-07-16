import {reducer, ActionCreator, ActionType} from "./reducer.js";
import {genreFilter} from "./const/const.js";

const films = [
  {
    id: 0,
    src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts`,
    genre: `Comedies`,
    videoPreview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    id: 1,
    src: `img/bohemian-rhapsody.jpg`,
    title: `Bohemian Rhapsody`,
    genre: `Documentary`,
    videoPreview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    id: 2,
    src: `img/macbeth.jpg`,
    title: `Macbeth`,
    genre: `Comedies`,
    videoPreview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    id: 3,
    src: `img/aviator.jpg`,
    title: `Aviator`,
    genre: `Dramas`,
    videoPreview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    id: 4,
    src: `img/we-need-to-talk-about-kevin.jpg`,
    title: `We need to talk about Kevin`,
    genre: `Thrillers`,
    videoPreview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    id: 5,
    src: `img/shutter-island.jpg`,
    title: `Shutter Island`,
    genre: `Horror`,
    videoPreview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    id: 6,
    src: `img/no-country-for-old-men.jpg`,
    title: `No Country for Old Men`,
    genre: `Romance`,
    videoPreview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    id: 7,
    src: `img/snatch.jpg`,
    title: `Snatch`,
    genre: `Sci-Fi`,
    videoPreview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  }
];

const promoFilm = {
  promoTitle: `The Grand Budapest Hotel`,
  promoGenre: `Comedy/Drama`,
  promoYear: 2014,
};

const horrorFilm = [{
  id: 5,
  src: `img/shutter-island.jpg`,
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
      payload: `Comedies`,
    }
    )).toEqual({
      activeGenre: `Comedies`,
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
      type: ActionType.GET_FILTER_FILMS,
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
    expect(ActionCreator.getFilterFilms()).toEqual({
      type: ActionType.GET_FILTER_FILMS,
    });
  });
});
