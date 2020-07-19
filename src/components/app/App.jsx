import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/Main.jsx';
import Movie from '../movie-detail/Movie.jsx';
import {connect} from 'react-redux';
import {getPromoFilm, getAllFilms} from '../../reducer/data/selectors.js';


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
    const {promoFilm, films} = this.props;

    if (this.state.screen === `main`) {
      return (
        <Main
          promoTitle={promoFilm.promoTitle}
          promoGenre={promoFilm.promoGenre}
          promoYear={promoFilm.promoYear}
          films={films}
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

App.propTypes = {
  promoFilm: PropTypes.shape({
    promoTitle: PropTypes.string.isRequired,
    promoGenre: PropTypes.string.isRequired,
    promoYear: PropTypes.number.isRequired,
  }),
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  promoFilm: getPromoFilm(state),
  films: getAllFilms(state),
});

export default connect(mapStateToProps, null)(App);
