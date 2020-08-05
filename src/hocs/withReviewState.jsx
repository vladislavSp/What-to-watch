import React from 'react';
import PropTypes from 'prop-types';
import {Operation} from '../reducer/data/data';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {getAllFilms} from '../reducer/data/selectors'; // getCurrentMovieById
import {MIN_REVIEW_LENGTH, MAX_REVIEW_LENGTH} from '../const/const';

const validateReview = (value) => {
  return value.length >= MIN_REVIEW_LENGTH && value.length <= MAX_REVIEW_LENGTH;
};

export const withReviewState = (Component) => {
  class WithReviewState extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        review: ``,
        rating: 3,
        reviewIsValid: false,
        ratingIsValid: true,
        isLoading: false,
        networkError: false,
      };

      this.handleRatingChange = this.handleRatingChange.bind(this);
      this.handleReviewChange = this.handleReviewChange.bind(this);
      this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }

    handleRatingChange(evt) {
      const {value} = evt.target;

      this.setState({
        rating: value,
        ratingIsValid: !!value,
      });
    }

    handleReviewChange(evt) {
      const {value} = evt.target;

      this.setState({
        review: value,
        reviewIsValid: validateReview(value),
      });
    }

    handleSubmitForm(evt) {
      evt.preventDefault();
      const {onUploadReview, currentMovie} = this.props;
      const {review, rating} = this.state;

      this.setState((state) => ({
        isLoading: !state.isLoading,
      }));

      onUploadReview(currentMovie, review, rating)
        .then((response) => {
          if (response.status !== 200) {
            this.setState((state) => ({
              isLoading: !state.isLoading,
              networkError: response.message
            }));
          } else {
            this.setState((state) => ({
              isLoading: !state.isLoading,
              networkError: false,
            }));
          }
        });
    }

    render() {
      const {networkError, reviewIsValid, ratingIsValid, isLoading} = this.state;
      const {currentMovie} = this.props;

      return <Component
        {...this.props}
        currentMovie={currentMovie}
        networkError={networkError}
        onSubmit={this.handleSubmitForm}
        onRatingChange={this.handleRatingChange}
        onReviewChange={this.handleReviewChange}
        reviewIsValid={reviewIsValid}
        ratingIsValid={ratingIsValid}
        isLoading={isLoading}
      />;
    }
  }

  WithReviewState.propTypes = {
    currentMovie: PropTypes.object,
    onUploadReview: PropTypes.func,
  };

  return WithReviewState;
};

const mapStateToProps = (state) => ({
  currentMovie: getAllFilms(state)[2], // поменяю позже на поиск фильма по id
});

const mapDispatchToProps = {
  onUploadReview: Operation.uploadReview,
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withReviewState
);
