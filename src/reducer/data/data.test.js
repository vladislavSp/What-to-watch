import {reducer, ActionType, ActionCreator} from './data';

const films = [
  {
    id: 0,
    actors: [`Leonardo DiCaprio`, `Cameron Diaz`, `Daniel Day-Lewis`],
    background: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/gangs_of_new_york.jpg`,
    backgroundColor: `#A6B7AC`,
    description: ``,
    duration: 167,
    genre: `Crime`,
    inFavorites: false,
    posterImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Gangs_of_New_York_Poster.jpg`,
    previewImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/gangs_of_new_york.jpg`,
    producer: `Martin Scorsese`,
    rating: 8.8,
    title: `Gangs of new york`,
    video: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    videoPreview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    votes: 370881,
    year: 2002
  },
  {
    id: 1,
    actors: [`Leonardo DiCaprio`, `Cameron Diaz`, `Daniel Day-Lewis`],
    background: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/gangs_of_new_york.jpg`,
    backgroundColor: `#A6B7AC`,
    description: ``,
    duration: 222,
    genre: `Crime`,
    inFavorites: false,
    posterImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Gangs_of_New_York_Poster.jpg`,
    previewImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/gangs_of_new_york.jpg`,
    producer: `Martin Scorsese`,
    rating: 8.8,
    title: `Gangs of new york`,
    video: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    videoPreview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    votes: 421232,
    year: 2003
  }
];

const promoFilm = {
  id: 0,
  actors: [`Leonardo DiCaprio`, `Cameron Diaz`, `Daniel Day-Lewis`],
  background: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/gangs_of_new_york.jpg`,
  backgroundColor: `#A6B7AC`,
  description: ``,
  duration: 167,
  genre: `Crime`,
  inFavorites: false,
  posterImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Gangs_of_New_York_Poster.jpg`,
  previewImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/gangs_of_new_york.jpg`,
  producer: `Martin Scorsese`,
  rating: 8.8,
  title: `Gangs of new york`,
  video: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  videoPreview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  votes: 370881,
  year: 2002
};

describe(`Reducer work correctly`, () => {
  it(`Reducer without add parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      allFilms: [],
      promoFilm: {},
    });
  });

  it(`Reducer should update data store - All films from net`, () => {
    expect(reducer({
      allFilms: [],
    }, {
      type: ActionType.LOAD_FILMS,
      payload: films,
    })).toEqual({
      allFilms: films,
    });
  });

  it(`Reducer should update data store - PromoFilm from net`, () => {
    expect(reducer({
      promoFilm: {}
    }, {
      type: ActionType.LOAD_PROMO,
      payload: promoFilm,
    })).toEqual({promoFilm});
  });

  it(`Action creator - for getting films work correctly`, () => {
    expect(ActionCreator.loadFilms(films)).toEqual({
      type: ActionType.LOAD_FILMS,
      payload: films,
    });
  });

  it(`Action creator - for getting promo film work correctly`, () => {
    expect(ActionCreator.loadPromo(promoFilm)).toEqual({
      type: ActionType.LOAD_PROMO,
      payload: promoFilm,
    });
  });
});
