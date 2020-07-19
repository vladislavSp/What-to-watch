import React from 'react';
import renderer from 'react-test-renderer';
import FilmCard from './film-card';
import {films} from '../../mocks/films.js';

const isActive = true;

it(`renders correctly`, () => {
  const tree = renderer.create(<FilmCard
    film={films[0]}
    onCardClick={() => {}}
    isActive={isActive}
    onMouseEnter={() => {}}
    onMouseLeave={() => {}} />, {
    createNodeMock: () => {
      return {};
    }
  })
  .toJSON();
  expect(tree).toMatchSnapshot();
});
