import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SignHeader from './SignHeader.jsx';

configure({adapter: new Adapter()});

describe(`SignHeader e2e test`, () => {
  it(`SignHeader react on click`, () => {
    const status = `NO_AUTH`;
    const onSignInClick = jest.fn();

    const header = shallow(<SignHeader
      status={status}
      onSignInClick={onSignInClick}
    />);

    const headerLink = header.find(`.user-block__link`);
    headerLink.simulate(`click`);
    expect(onSignInClick).toHaveBeenCalledTimes(1);
  });
});
