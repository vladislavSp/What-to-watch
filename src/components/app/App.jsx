import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/Main.jsx';
import Movie from '../movie-detail/Movie.jsx';
import {connect} from 'react-redux';
import {getPromoFilm, getAllFilms} from '../../reducer/data/selectors';
import {getFilteredFilms} from '../../reducer/app/selectors';

const movieInfo = {
  name: `The Grand Budapest Hotel`,
  jenre: `Drama`,
  year: 2014,
  poster: `img/bg-the-grand-budapest-hotel.jpg`,
  img: `img/the-grand-budapest-hotel-poster.jpg`
};

export class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      screen: `main`
    };
  }

  renderMainScreen() {
    const {promoFilm, filteredFilms} = this.props;

    if (this.state.screen === `main`) {
      return (
        <Main
          promoFilm={promoFilm}
          films={filteredFilms}
          onCardClick={(screenNew) => {
            this.setState({
              screen: screenNew,
            });
          }}
        />
      );
    }
    if (this.state.screen !== `main`) {
      return (
        <Movie info={movieInfo} />
      );
    }
    return null;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this.renderMainScreen()}
          </Route>
          <Route exact path="/movie">
            {<Movie info={movieInfo} />}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  promoFilm: getPromoFilm(state),
  films: getAllFilms(state),
  filteredFilms: getFilteredFilms(state).slice(0, 7),
});

App.propTypes = {
  promoFilm: PropTypes.object.isRequired,
  filteredFilms: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadFilms: PropTypes.func.isRequired,
  loadPromo: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(App);
