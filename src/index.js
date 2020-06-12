import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const promoInfo = {
    promoTitle: `The Grand Budapest Hotel`,
    promoGenre: `Comedy/Drama`,
    promoYear: 2014,
};

const filmsTitle = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`, `We need to talk about Kevin`, `What We Do in the Shadows`, `Revenant`, `Johnny English`, `Shutter Island`, `No Country for Old Men`, `Snatch`, `Moonrise Kingdom`, `Seven Years in Tibet`, `Midnight Special`, `War of the Worlds`, `Dardjeeling Limited`, `Orlando`, `Mindhunter`, `Midnight Special`];

ReactDOM.render( <
    App promoTitle = { promoInfo.promoTitle }
    promoGenre = { promoInfo.promoGenre }
    promoYear = { promoInfo.promoYear }
    filmsTitle = { filmsTitle }
    />,
    document.getElementById(`root`)
);