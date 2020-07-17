import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../player/VideoPlayer.jsx';
import {withActiveCard} from '../../hocs/withActiveItem.jsx';

const FilmCard = (props) => {
  const {title, onCardClick, srcVideo, posterVideo, isActive, onMouseEnter, onMouseLeave} = props;

  return (<article
    className="small-movie-card catalog__movies-card"
    onMouseEnter={() => onMouseEnter(title)}
    onMouseLeave={onMouseLeave}
    onClick={() => onCardClick(title)}>

    <React.Fragment>
      <div className="small-movie-card__image">
        <VideoPlayer srcVideo={ srcVideo } poster={ posterVideo } isPlaying={ isActive } />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </React.Fragment>

  </article>);
};

FilmCard.propTypes = {
  title: PropTypes.string.isRequired,
  onCardClick: PropTypes.func.isRequired,
  srcVideo: PropTypes.string.isRequired,
  posterVideo: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default withActiveCard(FilmCard);
