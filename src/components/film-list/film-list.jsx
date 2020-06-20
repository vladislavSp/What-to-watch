import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card.jsx';

class FilmList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCardTitle: ``
    };

    this.handleTitleFocus = this.handleTitleFocus.bind(this);
  }

  handleTitleFocus(title) {
    this.setState({
      activeCardTitle: `${title}`
    });
  }

  render() {
    return (
      <div className="catalog__movies-list">
        {this.props.films.map((film, index) => <FilmCard key={film.title + index} title={film.title} handleTitleFocus={this.handleTitleFocus}/>)}
      </div>
    );
  }
}

FilmList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default FilmList;
