import React from 'react';
import PropTypes from 'prop-types';

const Overview = ({filmContent}) => (<React.Fragment>
  <div className="movie-rating">
    <div className="movie-rating__score">{filmContent.rating}</div>
    <p className="movie-rating__meta">
      <span className="movie-rating__level">-</span>
      <span className="movie-rating__count">{10} ratings</span>
    </p>
  </div>

  <div className="movie-card__text">
    <p>{filmContent.description}</p>

    <p className="movie-card__director"><strong>Director: {filmContent.producer}</strong></p>

    <p className="movie-card__starring"><strong>Starring: {filmContent.actors.map((el) => `${el}, `) } and other</strong></p>
  </div>
</React.Fragment>);

Overview.propTypes = {
  filmContent: PropTypes.object.isRequired,
};

export default Overview;
