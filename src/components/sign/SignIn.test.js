import React from 'react';
import renderer from 'react-test-renderer';
import SignIn from './SignIn.jsx';

describe(`Render SignIn page`, () => {
  it(`SignIn page render correctly`, () => {
    const error = false;
    const tree = renderer.create((
      <SignIn
        onSubmit={() => {}}
        authorizationError={error}
      />
    ), {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
