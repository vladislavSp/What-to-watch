import React from 'react';
import renderer from 'react-test-renderer';
import FilmCard from './film-card';

const title = `Fantastic Beasts`;
const scrVideo = `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`;
const poster = `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`;
const isActive = true;

it(`renders correctly`, () => {
  const tree = renderer.create(<FilmCard
    title={title}
    onCardClick={() => {}}
    srcVideo={scrVideo}
    posterVideo={poster}
    isActive={isActive}
    onMouseEnter={() => {}}
    onMouseLeave={() => {}} />, {
    createNodeMock: () => {
      return {};
    }
  })
  .toJSON();
  expect(tree).toMatchSnapshot();
});
