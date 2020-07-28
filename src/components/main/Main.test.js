import React from 'react';
import renderer from 'react-test-renderer';
import Main from './Main';
import {films, promoFilm} from '../../mocks/films.js';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {genreFilter} from '../../const/const.js';
import NameSpace from '../../reducer/name-space';

const mockStore = configureStore([]);

it(`Main renders correctly`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      allFilms: films,
    },
    [NameSpace.APP]: {
      activeGenre: genreFilter.ALL,
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <Main
          promoFilm={promoFilm}
          films={films}
          onCardClick={() => {}}
          authorizationStatus={`Main screen`}
          onSignInClick={() => {}}
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      })
  .toJSON();
  expect(tree).toMatchSnapshot();
});
