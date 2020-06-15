import React from 'react';
import renderer from 'react-test-renderer';
import Main from './Main';

const promoInfo = {
  promoTitle: `The Grand Budapest Hotel`,
  promoGenre: `Comedy/Drama`,
  promoYear: 2014,
};

const filmsTitle = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`, `We need to talk about Kevin`, `What We Do in the Shadows`, `Revenant`, `Johnny English`, `Shutter Island`, `No Country for Old Men`, `Snatch`, `Moonrise Kingdom`, `Seven Years in Tibet`, `Midnight Special`, `War of the Worlds`, `Dardjeeling Limited`, `Orlando`, `Mindhunter`, `Midnight Special`];

it(`renders correctly`, () => {
  const tree = renderer.create(<Main
    promoTitle={promoInfo.promoTitle}
    promoGenre={promoInfo.promoGenre}
    promoYear={promoInfo.promoYear}
    filmsTitle={filmsTitle}
    onTitleClick={() => {}}
  ></Main>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
