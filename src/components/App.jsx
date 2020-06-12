import React from 'react';
import Main from './Main.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {promoTitle, promoGenre, promoYear, filmsTitle} = props;

  return <Main promoTitle={promoTitle} promoGenre={promoGenre} promoYear={promoYear} filmsTitle={filmsTitle} />;
};

App.propTypes = {
  promoTitle: PropTypes.string.isRequired,
  promoGenre: PropTypes.string.isRequired,
  promoYear: PropTypes.number.isRequired,
  filmsTitle: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
