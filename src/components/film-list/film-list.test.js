import React from 'react';
import renderer from 'react-test-renderer';
import FilmList from '../film-list/film-list';
import films from '../../mocks/films.js';

it(`renders correctly film list`, () => {
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
