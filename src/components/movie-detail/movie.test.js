import React from 'react';
import renderer from 'react-test-renderer';
import {Movie} from './Movie';
import {films} from '../../mocks/films';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space';

const mockStore = configureStore([]);

const filteredFilms = films;

it(`renders Movie correctly`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      filteredFilms: films,
    },
  });

  const tree = renderer.create(
      <Provider store={store}>
        <Movie
          film={filteredFilms[0]}
          isActive={`Overview`}
          onTabClick={() => {}}
          filteredGenreFilms={filteredFilms}
          onCardClick={() => {}}>
        </Movie>
      </Provider>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
