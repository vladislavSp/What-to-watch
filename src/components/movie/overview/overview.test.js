import React from "react";
import renderer from "react-test-renderer";
import {filmContent} from "../../../mocks/mocks";
import Overview from "./overview.jsx";

it(`VideoPlayer render correctly`, () => {
  const tree = renderer
    .create(<Overview filmContent={filmContent} />, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
