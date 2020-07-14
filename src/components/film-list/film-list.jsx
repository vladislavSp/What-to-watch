import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card.jsx';

class FilmList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="catalog__movies-list">
        {this.props.films.map((film, index) => (
          <FilmCard
            key={film.title + index}
            title={film.title}
            onCardClick={this.props.onCardClick}
            srcVideo = {film.videoPreview}
            posterVideo = {film.src}
          />)
        )}
      </div>
    );
  }
}

FilmList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default FilmList;
