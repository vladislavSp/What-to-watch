import React from 'react';
import {configure, shallow} from 'enzyme';
import {withActiveTab} from './withActiveTab.jsx';
import Adapter from 'enzyme-adapter-react-16';
import {films} from '../mocks/mocks';

const MockComponent = () => <div/>;
const WrappedMockComponent = withActiveTab(MockComponent);
configure({adapter: new Adapter()});

describe(`withActiveTab component correctly changed state`, () => {
  const wrapper = shallow(<WrappedMockComponent
    onLoadComments={() => {}}
    movie={films[0]}
  />);

  it(`State init`, () => {
    expect(wrapper.state().isActive).toEqual(`Overview`);
  });

  it(`State correctly changed by handleTabSwitch`, () => {
    wrapper.instance().handleMouseClick(`Details`);
    expect(wrapper.state().isActive).toEqual(`Details`);
  });
});
