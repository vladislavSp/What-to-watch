import React from 'react';
import renderer from 'react-test-renderer';
import Error from './Error.jsx';

it(`Error render correctly`, () => {
  const tree = renderer.create((
    <Error />
  ), {
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
