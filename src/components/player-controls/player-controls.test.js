import React from "react";
import renderer from "react-test-renderer";
import {PlayerControls} from "./player-controls.jsx";

it(`Player controls renders correctly`, () => {
  const tree = renderer
    .create(<PlayerControls remainingTime={`00:50`} progress={10} />, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
