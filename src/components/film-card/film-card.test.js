import React from 'react';
import renderer from 'react-test-renderer';
import FilmCard from './film-card';

const title = `Fantastic Beasts`;
const scrVideo = `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`;
const poster = `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`;

it(`renders correctly`, () => {
  const tree = renderer.create(<FilmCard
    title={title}
    onCardClick={() => {}}
    srcVideo={scrVideo}
    posterVideo={poster}>
  </FilmCard>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
