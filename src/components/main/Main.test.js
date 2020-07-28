import React from 'react';
import renderer from 'react-test-renderer';
import Main from './Main';
import {films, promoFilm} from '../../mocks/films.js';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {genreFilter, FILM_CARD} from '../../const/const.js';
import NameSpace from '../../reducer/name-space';

const mockStore = configureStore([]);

it(`Main renders correctly`, () => {
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

  const tree = renderer.create(
      <Provider store={store}>
        <Main
          promoFilm={promoFilm}
          films={films}
          onCardClick={() => {}}
          authorizationStatus={`Main screen`}
          onSignInClick={() => {}}
          maxFilmLength={FILM_CARD.MAX_COUNT}
          filmLength={FILM_CARD.INIT_STATE}
          onViewBtnClick={() => {}}
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      })
  .toJSON();
  expect(tree).toMatchSnapshot();
});
