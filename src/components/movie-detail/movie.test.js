import React from 'react';
import renderer from 'react-test-renderer';
import Movie from './Movie';

const movieInfo = {
  name: `The Grand Budapest Hotel`,
  jenre: `Drama`,
  year: 2014,
  poster: `img/bg-the-grand-budapest-hotel.jpg`,
  img: `img/the-grand-budapest-hotel-poster.jpg`
};

it(`renders Movie correctly`, () => {
  const tree = renderer.create(<Movie info={movieInfo}>
  </Movie>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
