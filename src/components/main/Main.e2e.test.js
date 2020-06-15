import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './Main';

Enzyme.configure({
  adapter: new Adapter(),
});

const filmsTitle = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`, `We need to talk about Kevin`, `What We Do in the Shadows`, `Revenant`, `Johnny English`, `Shutter Island`, `No Country for Old Men`, `Snatch`, `Moonrise Kingdom`, `Seven Years in Tibet`, `Midnight Special`, `War of the Worlds`, `Dardjeeling Limited`, `Orlando`, `Mindhunter`, `Midnight Special`];

const promoInfo = {
  promoTitle: `The Grand Budapest Hotel`,
  promoGenre: `Comedy/Drama`,
  promoYear: 2014,
};

describe(`MainComponent`, () => {
  it(`Click on title in the Main Component`, () => {
    const onTitleClick = jest.fn();
    const mainScreen = shallow(
        <Main
          filmsTitle={filmsTitle}
          promoTitle={promoInfo.promoTitle}
          promoGenre={promoInfo.promoGenre}
          promoYear={promoInfo.promoYear}
          onTitleClick={onTitleClick}
        />
    );

    const titleButton = mainScreen.find(`a.small-movie-card__link`).first();
    titleButton.simulate(`click`);
    expect(onTitleClick).toHaveBeenCalledTimes(1);
  });
});
