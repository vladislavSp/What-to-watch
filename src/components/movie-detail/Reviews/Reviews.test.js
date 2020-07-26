import React from 'react';
import renderer from 'react-test-renderer';
import Reviews from '../Reviews/Reviews.jsx';
import {reviews} from '../../../mocks/films';

it(`VideoPlayer render correctly`, () => {
  const tree = renderer.create((
    <Reviews
      reviews={reviews}
    />
  ), {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
