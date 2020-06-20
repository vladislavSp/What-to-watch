import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilmCard from './film-card';
import films from '../../mocks/films.js';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`FilmCard`, () => {
  it(`Mouse enter on title`, () => {
    const onMouseEnter = jest.fn();
    const card = shallow(
        films.map((film, index) => <FilmCard
          key={film.title + index}
          films={films.title}
          handleTitleFocus={onMouseEnter}>
        </FilmCard>));

    const title = card.find(`h3.small-movie-card__title`).first();
    title.simulate(`mouseenter`);
    expect(onMouseEnter).toHaveBeenCalledTimes(1);
  });

  it(`Data state update`, () => {
  });
});
