import React from 'react';
import {configure, shallow} from 'enzyme';
import {films, promoFilm} from '../../mocks/films.js';
import Adapter from 'enzyme-adapter-react-16';
import {Main} from '../main/Main.jsx';
import {FILM_CARD} from '../../const/const.js';

configure({adapter: new Adapter()});

describe(`Main e2e tests`, () => {
  it(`Should call onPlayClick one time`, () => {
    const onPlayClick = jest.fn();

    const main = shallow(
        <Main
          promoFilm={promoFilm}
          films={films}
          onCardClick={() => {}}
          authorizationStatus={`Main screen`}
          onSignInClick={() => {}}
          maxFilmLength={FILM_CARD.MAX_COUNT}
          filmLength={FILM_CARD.INIT_STATE}
          onViewBtnClick={() => {}}
          onPlayClick={onPlayClick}
        />);

    const filmBtn = main.find(`.movie-card__button`).at(0);
    filmBtn.simulate(`click`);
    expect(onPlayClick).toHaveBeenCalledTimes(1);
  });
});
