import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilmCard from './film-card';

configure({adapter: new Adapter()});

const titleText = `Fantastic Beast`;
const srcVideo = `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`;
const posterVideo = `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`;

describe(`FilmCard`, () => {
  it(`Mouse click on title`, () => {
    const card = shallow(
        <FilmCard
          title={titleText}
          onCardClick={() => {}}
          srcVideo={srcVideo}
          posterVideo={posterVideo}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
        >
        </FilmCard>);

    card.simulate(`mouseenter`);
    expect(card.state(`isActive`)).toBe(true);

    card.simulate(`mouseleave`);
    expect(card.state(`isActive`)).toBe(false);
  });

  it(`Mouse click on card`, () => {
    const onCardClick = jest.fn();
    const card = shallow(
        <FilmCard
          title={titleText}
          onCardClick={onCardClick}
          srcVideo={srcVideo}
          posterVideo={posterVideo}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
        >
        </FilmCard>);

    card.simulate(`click`);
    expect(onCardClick).toHaveBeenCalledTimes(1);
  });
});
