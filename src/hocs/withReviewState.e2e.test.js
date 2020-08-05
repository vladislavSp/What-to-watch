import React from 'react';
import {configure, shallow} from 'enzyme';
import {withReviewState} from './withReviewState.jsx';
import Adapter from 'enzyme-adapter-react-16';
import {films} from '../mocks/mocks';

const MockComponent = () => <div/>;
const WrappedMockComponent = withReviewState(MockComponent);
configure({adapter: new Adapter()});

describe(`State correctly changed by handleReviewChange`, () => {
  const wrapper = shallow(<WrappedMockComponent currentMovie={films[0]} />);

  it(`Valid review should change reviewIsValid to true`, () => {
    const event = {
      target: {
        value: `BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla`
      }
    };
    wrapper.instance().handleReviewChange(event);
    expect(wrapper.state().reviewIsValid).toEqual(true);
  });

  it(`Invalid review should change reviewIsValid to false`, () => {
    const event = {
      target: {
        value: `BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla`
      }
    };
    wrapper.instance().handleReviewChange(event);
    expect(wrapper.state().reviewIsValid).toEqual(false);
  });
});

describe(`State correctly changed by handleRatingChange`, () => {
  const wrapper = shallow(<WrappedMockComponent currentMovie={films[0]} />);
  it(`Change ratingValid to true`, () => {
    const event = {
      target: {
        value: `1`
      }
    };
    wrapper.instance().handleRatingChange(event);
    expect(wrapper.state().ratingIsValid).toEqual(true);
  });

  it(`Change ratingValid to false`, () => {
    const event = {
      target: {
        value: ``
      }
    };
    wrapper.instance().handleRatingChange(event);
    expect(wrapper.state().ratingIsValid).toEqual(false);
  });
});

it(`onUploadReview called by handleSubmitForm`, () => {
  const event = {preventDefault: () => {}};

  const onUploadReview = jest.fn().mockImplementationOnce(() => Promise.resolve(``));
  const wrapper = shallow(<WrappedMockComponent currentMovie={films[0]} onUploadReview={onUploadReview}/>);

  wrapper.instance().handleSubmitForm(event);
  expect(onUploadReview).toHaveBeenCalledTimes(1);
});
