import React from 'react';
import renderer from 'react-test-renderer';
import {FullScreenPlayer} from './full-screen-player.jsx';
import {promoFilm} from '../../mocks/mocks';
import history from '../../history';
import {Router} from 'react-router-dom';

jest.mock(`../player-controls/player-controls`, () => `PlayerControls`);

it(`FullPlayer renders correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <FullScreenPlayer
          currentMovie={promoFilm}
          isPlaying={true}
          onPlayPause={() => {}}
          onFullScreen={() => {}}
          history={{}}
        />
      </Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

