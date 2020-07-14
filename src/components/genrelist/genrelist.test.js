import React from 'react';
import renderer from 'react-test-renderer';
import {GenreList} from './genrelist.jsx';

const filtersTest = [`All`, `Comedy`, `Horror`, `Documentary`];

it(`Render genrelist / snapshot`, () => {
  const tree = renderer
    .create((
      <GenreList
        genreFilterArray={filtersTest}
        activeFilter={filtersTest[0]}
        onFilterClick={() => {}}
      />), {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
