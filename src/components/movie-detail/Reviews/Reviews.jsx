import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const formatDate = (date) => moment(date).format(`MMMM DD, YYYY`);

const Reviews = ({reviews}) => (<div className="movie-card__reviews-col">
  {reviews.map((el) => {

    return (<div key={el.id} className="review">
      <blockquote className="review__quote">
        <p className="review__text">{el.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{el.user.name}</cite>
          <time className="review__date" dateTime={formatDate(el.date)}>{formatDate(el.date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{el.rating}</div>
    </div>);
  })}

</div>);

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Reviews;

