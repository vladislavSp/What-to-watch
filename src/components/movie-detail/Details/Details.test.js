import React from 'react';
import renderer from 'react-test-renderer';
import Details from './Details.jsx';
import {filmContent} from '../../../mocks/mocks';

it(`VideoPlayer render correctly`, () => {
  const tree = renderer.create((
    <Details
      filmContent={filmContent}
    />
  ), {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
