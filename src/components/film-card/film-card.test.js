import React from 'react';
import renderer from 'react-test-renderer';
import FilmCard from './film-card';

const title = `Fantastic Beasts`;

it(`renders correctly`, () => {
  const tree = renderer.create(<FilmCard
    title={title}
    handleTitleFocus={() => {}}>
  </FilmCard>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
