import React from 'react';
import renderer from 'react-test-renderer';
import {SignIn} from './SignIn.jsx';
import history from '../../history';
import {Router} from 'react-router-dom';

describe(`Render SignIn page`, () => {
  it(`SignIn page render correctly`, () => {
    const error = false;
    const tree = renderer.create((
      <Router history={history}>
        <SignIn
          onSubmitForm={() => {}}
          onLoginChange={() => {}}
          onPasswordChange={() => {}}
          authorizationError={error}
        />
      </Router>
    ), {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
