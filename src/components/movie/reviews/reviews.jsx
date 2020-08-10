import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const Reviews = ({reviews}) => {
  const formatDate = (date) => moment(date).format(`MMMM DD, YYYY`);
  const secondColumn = reviews.length / 2;

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {reviews.slice(0, secondColumn || 1).map((el) => {
          return (
            <div key={el.id} className="review">
              <blockquote className="review__quote">
                <p className="review__text">{el.comment}</p>

                <footer className="review__details">
                  <cite className="review__author">{el.user.name}</cite>
                  <time className="review__date" dateTime={formatDate(el.date)}>
                    {formatDate(el.date)}
                  </time>
                </footer>
              </blockquote>

              <div className="review__rating">{el.rating}</div>
            </div>
          );
        })}
      </div>
      <div className="movie-card__reviews-col">
        {reviews.slice(secondColumn).map((el) => {
          return (
            <div key={el.id} className="review">
              <blockquote className="review__quote">
                <p className="review__text">{el.comment}</p>

                <footer className="review__details">
                  <cite className="review__author">{el.user.name}</cite>
                  <time className="review__date" dateTime={formatDate(el.date)}>
                    {formatDate(el.date)}
                  </time>
                </footer>
              </blockquote>

              <div className="review__rating">{el.rating}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Reviews;
