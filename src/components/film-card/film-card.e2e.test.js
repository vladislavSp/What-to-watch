import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmCard from "./film-card";
import {films} from "../../mocks/mocks";

configure({adapter: new Adapter()});

describe(`FilmCard tests`, () => {
  it(`FilmCard should be active on hover`, () => {
    const card = shallow(
        <FilmCard
          film={films[0]}
          isActive={true}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
        ></FilmCard>
    );

    card.simulate(`mouseenter`);
    expect(card.props().isActive).toBe(true);
  });

  it(`FilmCard should be inactive on blur`, () => {
    const card = shallow(
        <FilmCard
          film={films[0]}
          isActive={false}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
        ></FilmCard>
    );

    card.simulate(`mouseleave`);
    expect(card.props().isActive).toBe(false);
  });
});
