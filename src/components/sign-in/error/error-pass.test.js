import React from "react";
import renderer from "react-test-renderer";
import {ErrorPass} from "./error.jsx";

it(`ErrorPass render correctly`, () => {
  const tree = renderer
    .create(
        <ErrorPass />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
