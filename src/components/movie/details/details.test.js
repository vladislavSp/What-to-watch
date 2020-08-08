import React from 'react';
import renderer from 'react-test-renderer';
import Details from './details.jsx';
import {filmContent} from '../../../mocks/mocks';

it(`Details render correctly`, () => {
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
