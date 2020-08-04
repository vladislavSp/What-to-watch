import React from 'react';
import PropTypes from 'prop-types';

const Reviews = ({reviews}) => (<div className="movie-card__reviews-col">
  {reviews.map((el) => {

    return (<div key={el.id} className="review">
      <blockquote className="review__quote">
        <p className="review__text">{el.text}</p>

        <footer className="review__details">
          <cite className="review__author">{el.author}</cite>
          <time className="review__date" dateTime={el.date}>{el.date}</time>
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

