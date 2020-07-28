import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {App} from './App.jsx';
import {genreFilter} from '../../const/const.js';
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
      },
      [NameSpace.APP]: {
        activeGenre: genreFilter.ALL,
      }
    });

    const tree = renderer
      .create((
        <Provider store={store}>
          <App
            filteredFilms={filteredFilms}
            promoFilm={promoFilm}
            authorizationStatus={`NO_AUTH`}
            authorizationError={false}
            currentAppPage={`Main screen`}
            onSignInClick={() => {}}
            login={() => {}}
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
