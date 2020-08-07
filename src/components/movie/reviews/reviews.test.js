import React from 'react';
import renderer from 'react-test-renderer';
import Reviews from './reviews.jsx';

const reviews = [
  {
    "id": 1,
    "user": {
      "id": 5,
      "name": `Kate Mur`
    },
    "rating": 8.9,
    "comment": `Two detectives, a rookie and a veteran, hunt a serial killer who uses`,
    "date": `2019-05-08T14:13:56.569Z`
  }
];

it(`Reviews render correctly`, () => {
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
