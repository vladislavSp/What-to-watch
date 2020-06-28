import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card.jsx';

class FilmList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: ``,
      preview: false
    };

    this.handleCardEnter = this.handleCardEnter.bind(this);
    this.handleCardLeave = this.handleCardLeave.bind(this);
  }

  handleCardEnter(activeCard) {
    this.setState({
      activeCard,
      preview: true
    });
    console.log(activeCard);
  }

  handleCardLeave() {
    console.log(1);
  }

  render() {
    return (
      <div className="catalog__movies-list">
        {this.props.films.map((film, index) => (
          <FilmCard
            key={film.title + index}
            title={film.title}
            onCardClick={this.props.onCardClick}
            onCardEnter={this.handleCardEnter}
            onCardLeave={this.handleCardLeave}
            srcVideo = {film.videoPreview}
            posterVideo = {film.src}
            statePreview = {this.state.preview}
            stateActiveCard = {this.state.activeCard}
          />)
        )}
      </div>
    );
  }
}

FilmList.propTypes = {
  films: PropTypes.array.isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default FilmList;
