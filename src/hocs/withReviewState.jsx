import React from 'react';
import PropTypes from 'prop-types';
import {Operation} from '../reducer/data/data';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {getAllFilms} from '../reducer/data/selectors'; // getCurrentMovieById

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

    handleRatingChange() {
      // console.log(1);
    }
    handleReviewChange() {
      // console.log(2);
    }
    handleSubmitForm() {
      // console.log(3);
    }

    render() {
      const {networkError, handleSubmitForm, handleRatingChange, handleReviewChange, reviewIsValid, ratingIsValid, isLoading} = this.state;

      return <Component
        {...this.props}
        currentMovie={this.props.currentMovie}
        networkError={networkError}
        onSubmit={handleSubmitForm}
        onRatingChange={handleRatingChange}
        onReviewChange={handleReviewChange}
        reviewIsValid={reviewIsValid}
        ratingIsValid={ratingIsValid}
        isLoading={isLoading}
      />;
    }
  }

  WithReviewState.propTypes = {
    currentMovie: PropTypes.object.isRequired,
  };

  return WithReviewState;
};

const mapStateToProps = (state) => ({
  currentMovie: getAllFilms(state)[2],
});

const mapDispatchToProps = (dispatch) => ({
  onUploadReview() {
    dispatch(Operation.uploadReview());
  }
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withReviewState
);
