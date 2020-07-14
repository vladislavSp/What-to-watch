import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {GenreList} from './genrelist.jsx';

configure({adapter: new Adapter()});

const filtersTest = [`All`, `Comedy`, `Horror`, `Documentary`];

describe(`GenresList e2e tests`, () => {
  it(`Should call onFilterClick one time`, () => {
    const onFilterClick = jest.fn();

    const wrapper = shallow(
        <GenreList
          genreFilterArray={filtersTest}
          activeFilter={filtersTest[0]}
          onFilterClick={onFilterClick}
        />
    );

    const filterLink = wrapper.find(`.catalog__genres-link`).at(0);
    filterLink.simulate(`click`);

    expect(onFilterClick).toHaveBeenCalledTimes(1);
  });
});
