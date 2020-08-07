import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../player/player.jsx';
import {withActiveCard} from '../../hocs/withActiveItem.jsx';
import {Link} from 'react-router-dom';

const FilmCard = (props) => {
  const {film, isActive, onMouseEnter, onMouseLeave} = props;
  const {title, videoPreview, previewImage} = film;

  return (<article
    className="small-movie-card catalog__movies-card"
    onMouseEnter={() => onMouseEnter(title)}
    onMouseLeave={onMouseLeave}>

    <React.Fragment>
      <div className="small-movie-card__image">
        <VideoPlayer
          srcVideo={videoPreview}
          poster={previewImage}
          isPlaying={ isActive }
        />
      </div>
      <h3 className="small-movie-card__title">
        <Link to={`/films/${film.id}`} className="small-movie-card__link">{title}</Link>
      </h3>
    </React.Fragment>

  </article>);
};

FilmCard.propTypes = {
  film: PropTypes.object.isRequired,
  isActive: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default withActiveCard(FilmCard);
