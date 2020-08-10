import React from "react";
import renderer from "react-test-renderer";
import {SignHeader} from "./sign-header.jsx";
import {Router} from "react-router-dom";
import history from "../../../history";

const user = {
  avatar: `/wtw/static/avatar/2.jpg`
};

const status = `AUTH`;

describe(`render Sign Header`, () => {
  it(`Sign Header render correctly`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <SignHeader status={status} user={user} onSignInClick={() => {}} />
          </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
