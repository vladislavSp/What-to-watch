import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilmCard from './film-card';

Enzyme.configure({
  adapter: new Adapter(),
});

const titleText = `Fantastic Beast`;

describe(`FilmCard`, () => {
  it(`Mouse enter on title`, () => {
    const onMouseEnter = jest.fn();
    const card = shallow(
        <FilmCard
          title={titleText}
          handleTitleFocus={onMouseEnter}>
        </FilmCard>);

    const title = card.find(`h3.small-movie-card__title`).first();
    title.simulate(`mouseenter`);
    expect(onMouseEnter).toHaveBeenCalledTimes(1);
  });

  it(`Data state update`, () => {
  });
});
