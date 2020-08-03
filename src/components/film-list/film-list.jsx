import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card.jsx';

const FilmList = ({films}) => <div className="catalog__movies-list">
  {films.map((film) => (
    <FilmCard
      key={film.id}
      film={film}
    />)
  )}
</div>;


FilmList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FilmList;
