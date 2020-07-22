import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../player/VideoPlayer.jsx';
import {withActiveCard} from '../../hocs/withActiveItem.jsx';

const FilmCard = (props) => {
  const {film, onCardClick, isActive, onMouseEnter, onMouseLeave} = props;

  return (<article
    className="small-movie-card catalog__movies-card"
    onMouseEnter={() => onMouseEnter(film.title)}
    onMouseLeave={onMouseLeave}
    onClick={() => onCardClick(film.title)}>

    <React.Fragment>
      <div className="small-movie-card__image">
        <VideoPlayer srcVideo={ film.videoPreview } poster={ film.previewImage } isPlaying={ isActive } />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{film.title}</a>
      </h3>
    </React.Fragment>

  </article>);
};

FilmCard.propTypes = {
  film: PropTypes.object.isRequired,
  onCardClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default withActiveCard(FilmCard);
