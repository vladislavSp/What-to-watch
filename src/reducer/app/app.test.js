import {reducer, ActionType, ActionCreator} from './app';

const genreAll = `All genres`;

describe(`Reducers work correctly`, () => {
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

  it(`Reducer should change page`, () => {
    expect(reducer({
      currentAppPage: `Main screen`,
    },
    {
      type: ActionType.CHANGE_CURRENT_APP_PAGE,
      payload: `Movie screen`,
    }
    )).toEqual({
      currentAppPage: `Movie screen`,
    });
  });

  it(`Reducer should change VIEW FILM CARD`, () => {
    expect(reducer({
      filmLength: 0,
    },
    {
      type: ActionType.SET_VIEW_FILM_CARD,
      payload: 8,
    }
    )).toEqual({
      filmLength: 8,
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

  it(`Action creator - for setting current App Page work correctly`, () => {
    expect(ActionCreator.changeAppPage(`Main screen`)).toEqual({
      type: ActionType.CHANGE_CURRENT_APP_PAGE,
      payload: `Main screen`,
    });
  });

  it(`Action creator - for setting film length work correctly`, () => {
    expect(ActionCreator.setViewFilmCard(8)).toEqual({
      type: ActionType.SET_VIEW_FILM_CARD,
      payload: 8,
    });
  });
});
