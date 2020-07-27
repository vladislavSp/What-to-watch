import React from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../reducer/app/app';
import {connect} from 'react-redux';
import {getCurrentViewFilmCard} from '../../reducer/app/selectors';

export const ShowBtn = ({filmLength, onViewBtnClick}) => {
  console.log(filmLength, onViewBtnClick);

  return <div className="catalog__more">
    <button
      onClick={() => onViewBtnClick(filmLength)}
      className="catalog__button"
      type="button">
      Show more
    </button>
  </div>;
};

ShowBtn.propTypes = {
  filmLength: PropTypes.number.isRequired,
  onViewBtnClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filmLength: getCurrentViewFilmCard(state),
});

const mapDispatchToProps = (dispatch) => ({
  onViewBtnClick(length) {
    dispatch(ActionCreator.setViewFilmCard(length));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowBtn);
