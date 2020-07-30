import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Movie} from './Movie';
import {films} from '../../mocks/films';

configure({adapter: new Adapter()});

describe(`Movie`, () => {
  it(`Movie page props isActive in defaultState`, () => {
    const isActive = `Overview`;

    const movie = mount(<Movie
      isActive={isActive}
      onTabClick={() => {}}
      onCardClick={() => {}}
      filteredGenreFilms={films}
      onPlayClick={() => {}}
    />);

    expect(movie.props().isActive).toBe(isActive);
  });

  it(`Movie page onClick isActive in defaultState`, () => {
    const isActive = `Overview`;
    const onTabClick = jest.fn();

    const movie = mount(<Movie
      isActive={isActive}
      onTabClick={onTabClick}
      onCardClick={() => {}}
      filteredGenreFilms={films}
      onPlayClick={() => {}}
    />);

    const filterLink = movie.find(`.movie-nav__item`).at(0);
    filterLink.simulate(`click`);

    expect(onTabClick).toHaveBeenCalledTimes(1);
  });

  it(`On Movie page work correctly film start btn`, () => {
    const isActive = `Overview`;
    const onPlayClick = jest.fn();

    const movie = mount(<Movie
      isActive={isActive}
      onTabClick={() => {}}
      onCardClick={() => {}}
      filteredGenreFilms={films}
      onPlayClick={onPlayClick}
    />);

    const filmBtn = movie.find(`.movie-card__button`).at(0);
    filmBtn.simulate(`click`);

    expect(onPlayClick).toHaveBeenCalledTimes(1);
  });
});
