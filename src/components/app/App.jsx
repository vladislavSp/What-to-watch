import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/Main.jsx';
import Movie from '../movie-detail/Movie.jsx';

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
    const {promoTitle, promoGenre, promoYear, films} = this.props;

    if (this.state.screen === `main`) {
      return (
        <Main
          promoTitle={promoTitle}
          promoGenre={promoGenre}
          promoYear={promoYear}
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
  promoTitle: PropTypes.string.isRequired,
  promoGenre: PropTypes.string.isRequired,
  promoYear: PropTypes.number.isRequired,
  films: PropTypes.array.isRequired,
  // screen: PropTypes.string.isRequired
};

export default App;
