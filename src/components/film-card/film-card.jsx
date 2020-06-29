import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../player/VideoPlayer.jsx';

const FilmCard = ({title, onCardClick, onCardEnter, onCardLeave, srcVideo, posterVideo, statePreview, stateActiveCard}) => {

  if (statePreview && stateActiveCard === title) {
    return <article className="small-movie-card catalog__movies-card" onMouseLeave={onCardLeave} onClick={() => onCardClick(title)}>
      <VideoPlayer scrVideo={ srcVideo } poster={ posterVideo } />
    </article>;
  } else {
    return <article className="small-movie-card catalog__movies-card" onMouseEnter={() => onCardEnter(title)} onClick={() => onCardClick(title)}>
      <div className="small-movie-card__image">
        <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>;
  }
};

FilmCard.propTypes = {
  title: PropTypes.string.isRequired,
  onCardClick: PropTypes.func.isRequired,
  onCardEnter: PropTypes.func.isRequired,
  onCardLeave: PropTypes.func.isRequired,
  srcVideo: PropTypes.string.isRequired,
  posterVideo: PropTypes.string.isRequired,
  statePreview: PropTypes.bool.isRequired
};

export default FilmCard;
