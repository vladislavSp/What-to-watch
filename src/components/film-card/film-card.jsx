import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../player/VideoPlayer.jsx';

const FilmCard = ({title, onCardClick, onCardEnter, onCardLeave, srcVideo, posterVideo, statePreview, stateActiveCard}) => {
  return <article
    className="small-movie-card catalog__movies-card"
    onMouseEnter={() => onCardEnter(title)}
    onMouseLeave={onCardLeave}
    onClick={() => onCardClick(title)}>
    {statePreview && stateActiveCard === title ?
      <VideoPlayer scrVideo={ srcVideo } poster={ posterVideo } /> :
      <React.Fragment>
        <div className="small-movie-card__image">
          <img src={posterVideo} alt={title} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{title}</a>
        </h3>
      </React.Fragment>}
  </article>;
};

FilmCard.propTypes = {
  title: PropTypes.string.isRequired,
  onCardClick: PropTypes.func.isRequired,
  onCardEnter: PropTypes.func.isRequired,
  onCardLeave: PropTypes.func.isRequired,
  srcVideo: PropTypes.string.isRequired,
  posterVideo: PropTypes.string.isRequired,
  statePreview: PropTypes.bool.isRequired,
  stateActiveCard: PropTypes.string.isRequired
};

export default FilmCard;
