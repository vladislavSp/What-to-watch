import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {App} from './App.jsx';
import {genreFilter, FILM_CARD} from '../../const/const.js';
import {Provider} from 'react-redux';
import {films, promoFilm} from '../../mocks/films.js';
import NameSpace from '../../reducer/name-space';

const mockStore = configureStore([]);

const filteredFilms = films;

describe(`<App />`, () => {
  it(`Render App / snapshot`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        allFilms: films,
        promoFilm: films[0],
      },
      [NameSpace.APP]: {
        activeGenre: genreFilter.ALL,
        currentAppPage: `MAIN_PAGE`,
        filmLength: 0
      },
      [NameSpace.USER]: {
        authorizationStatus: `NO_AUTH`,
        authorizationError: false,
      }
    });

    const tree = renderer
      .create((
        <Provider store={store}>
          <App
            promoFilm={promoFilm}
            filteredFilms={filteredFilms}
            authorizationStatus={`NO_AUTH`}
            authorizationError={false}
            currentAppPage={`Main screen`}
            login={() => {}}
            onSignInClick={() => {}}
            filmLength={FILM_CARD.INIT_STATE}
            onViewBtnClick={() => {}}
          />
        </Provider>), {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
