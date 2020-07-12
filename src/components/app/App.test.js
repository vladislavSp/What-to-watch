import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {App} from './app.jsx';
import {genreFilter} from '../../const/const.js';
import {Provider} from 'react-redux';
import {films, promoFilm} from '../../mocks/films.js';

const mockStore = configureStore([]);

describe(`<App />`, () => {
  it(`Render App / snapshot`, () => {
    const store = mockStore({
      activeGenre: genreFilter.ALL,
    });

    const tree = renderer
      .create((
        <Provider store={store}>
          <App films={films} promoFilm={promoFilm} />
        </Provider>), {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
