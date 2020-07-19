import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilmCard from './film-card';

configure({adapter: new Adapter()});

const titleText = `Fantastic Beast`;
const srcVideo = `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`;
const posterVideo = `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`;

describe(`FilmCard tests`, () => {
  it(`FilmCard should be active on hover`, () => {
    const card = mount(
        <FilmCard
          title={titleText}
          onCardClick={() => {}}
          srcVideo={srcVideo}
          posterVideo={posterVideo}
          isActive={true}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
        >
        </FilmCard>);

    card.simulate(`mouseenter`);
    expect(card.props().isActive).toBe(true);
  });

  it(`FilmCard should be inactive on blur`, () => {
    const card = mount(
        <FilmCard
          title={titleText}
          onCardClick={() => {}}
          srcVideo={srcVideo}
          posterVideo={posterVideo}
          isActive={false}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
        >
        </FilmCard>);

    card.simulate(`mouseleave`);
    expect(card.props().isActive).toBe(false);
  });

  it(`Mouse click on card`, () => {
    const onCardClick = jest.fn();
    const card = mount(
        <FilmCard
          title={titleText}
          onCardClick={onCardClick}
          srcVideo={srcVideo}
          posterVideo={posterVideo}
          isActive={true}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
        >
        </FilmCard>);

    card.simulate(`click`);
    expect(onCardClick).toHaveBeenCalledTimes(1);
  });
});
