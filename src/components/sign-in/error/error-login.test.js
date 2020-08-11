import React from "react";
import renderer from "react-test-renderer";
import {ErrorLogin} from "./error.jsx";

it(`ErrorLogin render correctly`, () => {
  const tree = renderer
    .create(
        <ErrorLogin />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
