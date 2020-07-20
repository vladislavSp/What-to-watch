import {reducer, ActionType, ActionCreator} from './app';

const genreAll = `All genres`;

describe(`Reducer work correctly`, () => {
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

  it(`Action creator - for setting genre work correctly`, () => {
    expect(ActionCreator.setGenreType(`Horror`)).toEqual({
      type: ActionType.SET_JENRE,
      payload: `Horror`,
    });
  });
});
