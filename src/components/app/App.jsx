import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/Main.jsx';
import Movie from '../movie-detail/Movie.jsx';
import {connect} from 'react-redux';

const movieInfo = {
  name: `The Grand Budapest Hotel`,
  jenre: `Drama`,
  year: 2014,
  poster: `img/bg-the-grand-budapest-hotel.jpg`,
  img: `img/the-grand-budapest-hotel-poster.jpg`
};

class App extends PureComponent {
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
  promoFilm: state.promoFilm,
  films: state.showFilms,
});

export {App};
export default connect(mapStateToProps, null)(App);
