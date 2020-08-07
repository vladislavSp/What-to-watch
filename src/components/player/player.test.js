import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './player.jsx';

const isPlaying = false;
const srcVideo = `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`;
const poster = `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`;

describe(`render VideoPlayer`, () => {
  it(`VideoPlayer render correctly`, () => {
    const tree = renderer.create((
      <VideoPlayer
        isPlaying={isPlaying}
        poster={poster}
        srcVideo={srcVideo}
      />
    ), {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
