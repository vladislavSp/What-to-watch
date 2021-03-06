import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from "./player.jsx";

configure({adapter: new Adapter()});
const srcVideo = `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`;
const posterVideo = `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`;

describe(`VideoPlayer`, () => {
  it(`VideoPlayer is pause state`, () => {
    const isPlaying = false;

    const player = mount(
        <VideoPlayer
          isPlaying={isPlaying}
          poster={posterVideo}
          srcVideo={srcVideo}
        />
    );

    expect(player.props().isPlaying).toBe(isPlaying);
  });

  it(`VideoPlayer is play state`, () => {
    const isPlaying = true;

    const player = mount(
        <VideoPlayer
          isPlaying={isPlaying}
          poster={posterVideo}
          srcVideo={srcVideo}
        />
    );

    expect(player.props().isPlaying).toBe(isPlaying);
  });
});
