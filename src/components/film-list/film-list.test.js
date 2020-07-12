import React from 'react';
import renderer from 'react-test-renderer';
import FilmList from '../film-list/film-list';
import {films} from '../../mocks/films.js';

it(`Film list renders correctly`, () => {
  const tree = renderer.create(<FilmList
    films={films}
    onCardClick={() => {}} />, {
    createNodeMock: () => {
      return {};
    }
  })
  .toJSON();
  expect(tree).toMatchSnapshot();
});
