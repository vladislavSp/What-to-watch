import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/Main.jsx';

const App = (props) => {
  const {promoTitle, promoGenre, promoYear, filmsTitle} = props;

  return <Main promoTitle={promoTitle} promoGenre={promoGenre} promoYear={promoYear} filmsTitle={filmsTitle} onTitleClick={() => {}}/>;
};

App.propTypes = {
  promoTitle: PropTypes.string.isRequired,
  promoGenre: PropTypes.string.isRequired,
  promoYear: PropTypes.number.isRequired,
  filmsTitle: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTitleClick: PropTypes.func.isRequired
};

export default App;
