import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/app/app';
import {getGenres, getActiveGenre} from '../../reducer/app/selectors';
import {MAX_FILM_CARD} from '../../const/const';

export const GenreList = ({genreFilterArray, activeFilter, onFilterClick}) => {
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
  genreFilterArray: getGenres(state),
  activeFilter: getActiveGenre(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFilterClick(genre) {
    dispatch(ActionCreator.setGenreType(genre));
    dispatch(ActionCreator.setViewFilmCard(MAX_FILM_CARD));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
