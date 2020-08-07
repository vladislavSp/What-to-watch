import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {App} from './app.jsx';
import {genreFilter} from '../../const/const.js';
import {films} from '../../mocks/mocks';
import NameSpace from '../../reducer/name-space';

const mockStore = configureStore([]);

describe(`App render component correctly`, () => {
  it(`Render App / snapshot`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        allFilms: films,
        promoFilm: films[0],
      },
      [NameSpace.APP]: {
        activeGenre: genreFilter.ALL,
        filmLength: 8
      },
      [NameSpace.USER]: {
        authorizationStatus: `NO_AUTH`,
        authorizationError: false,
        user: {}
      }
    });

    const tree = renderer
      .create((
        <Provider store={store}>
          <App />
        </Provider>), {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
