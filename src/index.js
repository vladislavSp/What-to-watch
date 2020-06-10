import React from "react";
import ReactDOM from "react-dom";
import App from './components/App.jsx';

const promoInfo = {
  promoTitle: `The Grand Budapest Hotel`,
  promoGenre: `Comedy/Drama`,
  promoYear: 2014,
};

ReactDOM.render(
    <App
      promoTitle={promoInfo.promoTitle}
      promoGenre={promoInfo.promoGenre}
      promoYear={promoInfo.promoYear}
    />,
    document.getElementById(`root`)
);
