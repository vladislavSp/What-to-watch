import {reducer, ActionType, ActionCreator} from './app';

const genreAll = `All genres`;

describe(`App reducer work correctly`, () => {
  it(`Reducer should change filter`, () => {
    expect(reducer({
      activeGenre: genreAll,
    },
    {
      type: ActionType.SET_JENRE,
      payload: `Comedy`,
    }
    )).toEqual({
      activeGenre: `Comedy`,
    });
  });

  it(`Reducer should change VIEW FILM CARD`, () => {
    expect(reducer({
      filmLength: 8,
    },
    {
      type: ActionType.SET_VIEW_FILM_CARD,
      payload: 8,
    }
    )).toEqual({
      filmLength: 16,
    });
  });
});

describe(`Action Creators work correctly`, () => {
  it(`Action creator - for setting genre work correctly`, () => {
    expect(ActionCreator.setGenreType(`Horror`)).toEqual({
      type: ActionType.SET_JENRE,
      payload: `Horror`,
    });
  });

  it(`Action creator - for setting film length work correctly`, () => {
    expect(ActionCreator.setViewFilmCard(8)).toEqual({
      type: ActionType.SET_VIEW_FILM_CARD,
      payload: 8,
    });
  });
});
