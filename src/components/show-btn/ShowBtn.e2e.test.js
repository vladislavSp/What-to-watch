import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShowBtn from './ShowBtn.jsx';

configure({adapter: new Adapter()});

const filmLength = 8;

describe(`ShowBtn tests`, () => {
  it(`Click on the ShowBtn work correctly`, () => {
    const onViewBtnClick = jest.fn();
    const showBtn = shallow(
        <ShowBtn
          onViewBtnClick={onViewBtnClick}
          filmLength={filmLength}
        />);

    const btn = showBtn.find(`button.catalog__button`);
    btn.simulate(`click`);
    expect(onViewBtnClick).toHaveBeenCalledTimes(1);
  });
});
