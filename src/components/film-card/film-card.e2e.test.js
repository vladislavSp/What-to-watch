import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilmCard from './film-card';
import {films} from '../../mocks/films';

configure({adapter: new Adapter()});

describe(`FilmCard tests`, () => {
  it(`FilmCard should be active on hover`, () => {
    const card = mount(
        <FilmCard
          film={films[0]}
          onCardClick={() => {}}
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
          film={films[0]}
          onCardClick={() => {}}
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
          film={films[0]}
          onCardClick={onCardClick}
          isActive={true}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
        >
        </FilmCard>);

    card.simulate(`click`);
    expect(onCardClick).toHaveBeenCalledTimes(1);
  });
});
