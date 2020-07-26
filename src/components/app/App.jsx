import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/Main.jsx';
import Movie from '../movie-detail/Movie.jsx';
import {connect} from 'react-redux';
import {getPromoFilm, getAllFilms} from '../../reducer/data/selectors';
import {getFilteredFilms} from '../../reducer/app/selectors';


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
        <Movie
          film={filteredFilms[0]}
          onCardClick={(screenNew) => {
            this.setState({
              screen: screenNew,
            });
          }}
        />
      );
    }
    return null;
  }

  render() {
    const {filteredFilms} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this.renderMainScreen()}
          </Route>
          <Route exact path="/movie">
            {<Movie
              film={filteredFilms[0]}
              onCardClick={(screenNew) => {
                this.setState({
                  screen: screenNew,
                });
              }}
            />}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  promoFilm: getPromoFilm(state),
  films: getAllFilms(state),
  filteredFilms: getFilteredFilms(state).slice(0, 8),
});

App.propTypes = {
  promoFilm: PropTypes.object.isRequired,
  filteredFilms: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(App);
