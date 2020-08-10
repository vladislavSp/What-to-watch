import React from 'react';
import PropTypes from 'prop-types';
import {RatingForFilm, RatingNum} from '../../../const/const';

const getMovieRate = (rating) => {
  let movieRate = ``;

  if (rating === RatingNum.AVESOME) {
    movieRate = RatingForFilm.AVESOME;
  } else if (rating >= RatingNum.VERY_GOOD) {
    movieRate = RatingForFilm.VERY_GOOD;
  } else if (rating >= RatingNum.GOOD) {
    movieRate = RatingForFilm.GOOD;
  } else if (rating >= RatingNum.NORMAL) {
    movieRate = RatingForFilm.NORMAL;
  } else {
    movieRate = RatingForFilm.BAD;
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
