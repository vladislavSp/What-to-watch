import React from 'react';
import renderer from 'react-test-renderer';
import FilmCard from './film-card';

const films = [{src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`, title: `Fantastic Beasts`}];

it(`renders correctly`, () => {
  const tree = renderer.create(<FilmCard
    title={films.title}
    handleTitleFocus={() => {}}>
  </FilmCard>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
