import React from 'react';
import renderer from 'react-test-renderer';
import SignHeader from './SignHeader.jsx';

const status = `AUTH`;

describe(`render Sign Header`, () => {
  it(`Sign Header render correctly`, () => {
    const tree = renderer.create((
      <SignHeader
        status={status}
        onSignInClick={() => {}}
      />
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
