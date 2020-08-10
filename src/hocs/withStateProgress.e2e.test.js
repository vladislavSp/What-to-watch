import React from "react";
import {withStateProgress} from "./withStateProgress";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

const CURRENT_TIME = 30;
const DURATION = 120;
const HUNDRED = 100;

const MockComponent = () => <div />;
const WrappedMockComponent = withStateProgress(MockComponent);

configure({adapter: new Adapter()});

describe(`withStateProgress tests`, () => {
  jest
    .spyOn(WrappedMockComponent.prototype, `componentDidMount`)
    .mockImplementationOnce(() => {});
  const wrapper = shallow(<WrappedMockComponent />);

  it(`remainingTime correctly changed my handleTimeUpdate`, () => {
    wrapper.instance().handleTimeUpdate(CURRENT_TIME, DURATION);
    expect(wrapper.state().remainingTime).toEqual(DURATION - CURRENT_TIME);
  });

  it(`progressValue correctly changed by handleTimeUpdate`, () => {
    wrapper.instance().handleTimeUpdate(CURRENT_TIME, DURATION);
    expect(wrapper.state().progress).toEqual(
        (CURRENT_TIME / DURATION) * HUNDRED
    );
  });
});
