import React from 'react';
import renderer from 'react-test-renderer';
import FilmCard from '../film-card/film-card';
import films from '../../mocks/films.js';

it(`renders correctly`, () => {
  const tree = renderer.create(films.map((film, index) => <FilmCard
    key={film.title + index}
    title={film.title}
    onCardClick={() => {}}
    srcVideo = {film.videoPreview}
    posterVideo = {film.src}>
  </FilmCard>))
  .toJSON();
  expect(tree).toMatchSnapshot();
});
