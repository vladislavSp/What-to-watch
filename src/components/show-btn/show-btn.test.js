import React from 'react';
import renderer from 'react-test-renderer';
import ShowBtn from './show-btn.jsx';

const filmLength = 8;

it(`ShowBtn renders correctly`, () => {
  const tree = renderer.create(<ShowBtn
    filmLength={filmLength}
    onViewBtnClick={() => {}} />, {
    createNodeMock: () => {
      return {};
    }
  })
  .toJSON();
  expect(tree).toMatchSnapshot();
});
