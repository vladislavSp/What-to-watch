import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/Main.jsx';

const App = ({promoTitle, promoGenre, promoYear, films}) => <Main promoTitle={promoTitle} promoGenre={promoGenre} promoYear={promoYear} films={films} />;

App.propTypes = {
  promoTitle: PropTypes.string.isRequired,
  promoGenre: PropTypes.string.isRequired,
  promoYear: PropTypes.number.isRequired,
  films: PropTypes.array.isRequired,
};

export default App;
