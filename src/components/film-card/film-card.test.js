import React from 'react';
import renderer from 'react-test-renderer';
import FilmCard from './film-card';
import {films} from '../../mocks/mocks';
import {Router} from 'react-router-dom';
import history from '../../history';

const isActive = true;

it(`renders correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <FilmCard
          film={films[0]}
          isActive={isActive}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}} />
      </Router>, {
        createNodeMock: () => {
          return {};
        }
      })
  .toJSON();
  expect(tree).toMatchSnapshot();
});
