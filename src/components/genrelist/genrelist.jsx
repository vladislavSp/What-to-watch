import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';

const GenreList = ({genreFilterArray, activeFilter, onFilterClick}) => {
  return <ul className="catalog__genres-list">
    {genreFilterArray.map((genre) => (<li key={genre} className={`catalog__genres-item ${activeFilter === genre ? `catalog__genres-item--active` : `` }`}>
      <a
        href="#"
        className="catalog__genres-link"
        onClick={() => {
          onFilterClick(genre);
        }}>
        {genre}
      </a>
    </li>))}
  </ul>;
};

GenreList.propTypes = {
  genreFilterArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeFilter: PropTypes.string.isRequired,
  onFilterClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeFilter: state.activeGenre,
});

const mapDispatchToProps = (dispatch) => ({
  onFilterClick(genre) {
    dispatch(ActionCreator.setGenreType(genre));
    dispatch(ActionCreator.getFilterFilms());
  }
});

export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
