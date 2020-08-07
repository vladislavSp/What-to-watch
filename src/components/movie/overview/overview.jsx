import React from 'react';
import PropTypes from 'prop-types';

const ratingForFilm = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AVESOME: `Avesome`,
};

const ratingNum = {
  AWESOME: 10,
  VERY_GOOD: 8,
  GOOD: 5,
  NORMAL: 3,
  BAD: 0,
};

const getMovieRate = (rating) => {
  let movieRate = ``;

  if (rating === ratingNum.AVESOME) {
    movieRate = ratingForFilm.AVESOME;
  } else if (rating >= ratingNum.VERY_GOOD) {
    movieRate = ratingForFilm.VERY_GOOD;
  } else if (rating >= ratingNum.GOOD) {
    movieRate = ratingForFilm.GOOD;
  } else if (rating >= ratingNum.NORMAL) {
    movieRate = ratingForFilm.NORMAL;
  } else {
    movieRate = ratingForFilm.BAD;
  }
  return movieRate;
};

const Overview = ({filmContent}) => {
  return (<React.Fragment>
    <div className="movie-rating">
      <div className="movie-rating__score">{filmContent.rating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{getMovieRate(filmContent.rating)}</span>
        <span className="movie-rating__count">{filmContent.votes} ratings</span>
      </p>
    </div>

    <div className="movie-card__text">
      <p>{filmContent.description}</p>

      <p className="movie-card__director"><strong>Director: {filmContent.producer}</strong></p>

      <p className="movie-card__starring"><strong>Starring: {filmContent.actors.map((el) => `${el}, `) } and other</strong></p>
    </div>
  </React.Fragment>);
};

Overview.propTypes = {
  filmContent: PropTypes.object.isRequired,
};

export default Overview;
