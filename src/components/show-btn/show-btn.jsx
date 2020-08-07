import React from 'react';
import PropTypes from 'prop-types';

export const ShowBtn = ({filmLength, onViewBtnClick}) => {
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

export default ShowBtn;
