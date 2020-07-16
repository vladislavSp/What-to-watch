import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card.jsx';

const FilmList = (props) => <div className="catalog__movies-list">
  {props.films.map((film) => (
    <FilmCard
      key={film.id}
      title={film.title}
      onCardClick={props.onCardClick}
      srcVideo = {film.videoPreview}
      posterVideo = {film.src}
    />)
  )}
</div>;


FilmList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default FilmList;
