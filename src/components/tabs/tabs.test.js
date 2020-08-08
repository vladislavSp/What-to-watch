import React from 'react';
import renderer from 'react-test-renderer';
import Tabs from './tabs.jsx';

describe(`Tabs snapshot`, () => {
  it(`Tabs render correctly`, () => {

    const tree = renderer.create(
        <Tabs
          onTabClick={() => {}}
          isActive={`Overview`}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
