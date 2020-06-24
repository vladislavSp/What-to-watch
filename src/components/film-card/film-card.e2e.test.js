import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilmCard from './film-card';

configure({adapter: new Adapter()});

const titleText = `Fantastic Beast`;

describe(`FilmCard`, () => {
  it(`Mouse click on title`, () => {
    const onTitleFocus = jest.fn((...args) => [...args]);
    const card = shallow(
        <FilmCard
          title={titleText}
          onTitleFocus={onTitleFocus}
          onCardClick={() => {}}
        >
        </FilmCard>);

    const title = card.find(`h3.small-movie-card__title`);
    title.simulate(`mouseEnter`);
    expect(onTitleFocus).toHaveBeenCalledTimes(1);
    expect(onTitleFocus.mock.calls[0][0]).toBe(titleText);
  });

  it(`Mouse click on card`, () => {
    const onCardClick = jest.fn();
    const card = shallow(
        <FilmCard
          title={titleText}
          onTitleFocus={() => {}}
          onCardClick={onCardClick}
        >
        </FilmCard>);
    card.simulate(`click`);
    expect(onCardClick).toHaveBeenCalledTimes(1);
  });
});
