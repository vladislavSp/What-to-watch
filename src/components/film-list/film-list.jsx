import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card.jsx';

const FilmList = ({films, onCardClick}) => <div className="catalog__movies-list">
  {films.map((film) => (
    <FilmCard
      key={film.id}
      film={film}
      onCardClick={onCardClick}
    />)
  )}
</div>;


FilmList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default FilmList;
