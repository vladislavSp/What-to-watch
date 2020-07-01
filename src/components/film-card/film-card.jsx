import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../player/VideoPlayer.jsx';

class FilmCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: ``,
      isActive: false,
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter(activeCard) {
    this.setState({isActive: true, activeCard});
  }

  handleMouseLeave() {
    this.setState({isActive: false, activeCard: ``});
  }

  render() {
    const {title, onCardClick, srcVideo, posterVideo} = this.props;

    return (<article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => this.handleMouseEnter(title)}
      onMouseLeave={this.handleMouseLeave}
      onClick={() => onCardClick(title)}>

      <React.Fragment>
        <div className="small-movie-card__image">
          <VideoPlayer srcVideo={ srcVideo } poster={ posterVideo } isPlaying={ this.state.isActive } />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{title}</a>
        </h3>
      </React.Fragment>
    </article>);
  }
}

FilmCard.propTypes = {
  title: PropTypes.string.isRequired,
  onCardClick: PropTypes.func.isRequired,
  srcVideo: PropTypes.string.isRequired,
  posterVideo: PropTypes.string.isRequired
};

export default FilmCard;
