import React from 'react';
import {withActiveCard} from './withActiveItem';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
const MockComponent = () => <div/>;
const WrappedMockComponent = withActiveCard(MockComponent);

describe(`withStateProgress tests`, () => {
  const wrapper = shallow(<WrappedMockComponent/>);

  it(`Player is active play`, () => {
    wrapper.instance().handleMouseEnter();
    expect(wrapper.state().isActive)
      .toEqual(true);
  });

  it(`Player is active pause`, () => {
    wrapper.instance().handleMouseLeave();
    expect(wrapper.state().isActive)
      .toEqual(false);
  });
});
