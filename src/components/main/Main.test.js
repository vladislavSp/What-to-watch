import React from 'react';
import renderer from 'react-test-renderer';
import Main from './Main';
import films from '../../mocks/films.js';

const promoInfo = {
  promoTitle: `The Grand Budapest Hotel`,
  promoGenre: `Comedy/Drama`,
  promoYear: 2014,
};

it(`renders correctly`, () => {
  const tree = renderer.create(<Main
    promoTitle={promoInfo.promoTitle}
    promoGenre={promoInfo.promoGenre}
    promoYear={promoInfo.promoYear}
    films={films}
    onCardClick={() => {}}>
  </Main>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
