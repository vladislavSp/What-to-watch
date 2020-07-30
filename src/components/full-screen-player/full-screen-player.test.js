import React from 'react';
import renderer from 'react-test-renderer';
import FullScreenPlayer from './full-screen-player.jsx';
import {promoFilm} from '../../mocks/films';

it(`FullPlayer renders correctly`, () => {
  const tree = renderer.create((
    <FullScreenPlayer
      currentMovie={promoFilm}
      isPlaying={true}
      onPlayPause={() => {}}
      onFullScreen={() => {}}
      onExitClick={() => {}}
    />), {
    createNodeMock: () => {
      return {};
    }
  })
    .toJSON();
  expect(tree).toMatchSnapshot();
});

