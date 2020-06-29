import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./VideoPlayer.jsx";

const isPlaying = false;
const scrVideo = `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`;
const poster = `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`;

describe(`render VideoPlayer`, () => {
  it(`Should VideoPlayer render correctly`, () => {
    const tree = renderer
      .create((
        <VideoPlayer
          isPlaying={isPlaying}
          poster={poster}
          scrVideo={scrVideo}
        />
      ), {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
