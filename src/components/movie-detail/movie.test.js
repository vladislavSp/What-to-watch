import React from 'react';
import renderer from 'react-test-renderer';
import {Movie} from './Movie';
import {films} from '../../mocks/films';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space';

const mockStore = configureStore([]);

const filteredGenreFilms = films;

it(`renders Movie correctly`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      filteredFilms: films,
    },
  });

  const tree = renderer.create((
    <Provider store={store}>
      <Movie
        film={films[0]}
        isActive={`Overview`}
        onTabClick={() => {}}
        filteredGenreFilms={filteredGenreFilms}
        onCardClick={() => {}}
        onPlayClick={() => {}}
      >
      </Movie>
    </Provider>), {
    createNodeMock: () => {
      return {};
    }
  })
  .toJSON();
  expect(tree).toMatchSnapshot();
});
