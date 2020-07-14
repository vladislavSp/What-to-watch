import React from 'react';
import renderer from 'react-test-renderer';
import Main from './Main';
import {films, promoFilm} from '../../mocks/films.js';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {genreFilter} from '../../const/const.js';

const mockStore = configureStore([]);

it(`Main renders correctly`, () => {
  const store = mockStore({
    activeGenre: genreFilter.ALL,
  });

  const tree = renderer.create(
      <Provider store={store}>
        <Main
          promoTitle={promoFilm.promoTitle}
          promoGenre={promoFilm.promoGenre}
          promoYear={promoFilm.promoYear}
          films={films}
          onCardClick={() => {}}
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      })
  .toJSON();
  expect(tree).toMatchSnapshot();
});
