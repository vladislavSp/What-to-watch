import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../main/Main.jsx';
import Movie from '../movie-detail/Movie.jsx';
import SignIn from '../sign/SignIn.jsx';
import {getPromoFilm, getAllFilms} from '../../reducer/data/selectors';
import {getFilteredFilms, getCurrentPage, getCurrentViewFilmCard} from '../../reducer/app/selectors';
import {getAuthorizationStatus, getAuthorizationError} from "../../reducer/user/selectors";
import {Operation as UserOperation} from '../../reducer/user/user';
import {ActionCreator as AppActionCreator} from '../../reducer/app/app';
import {APP_PAGE} from '../../const/const';


export class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {promoFilm, filteredFilms, authorizationStatus, authorizationError, currentAppPage, login, onSignInClick, filmLength, onViewBtnClick} = this.props;

    const renderMainScreen = () => {
      let appPageRender;

      switch (currentAppPage) {
        case APP_PAGE.MAIN_PAGE:
          appPageRender = (<Main
            countFilterFilmCard={filteredFilms.length}
            countViewFilmCard={filmLength}
            onViewBtnClick={onViewBtnClick}
            onSignInClick = {onSignInClick}
            authorizationStatus={authorizationStatus}
            promoFilm={promoFilm}
            films={filteredFilms.slice(0, filmLength)}
            onCardClick={() => {}}
          />);
          break;
        case APP_PAGE.MOVIE:
          appPageRender = (<Movie
            film={filteredFilms[0]}
            onCardClick={() => {}}
          />);
          break;
        case APP_PAGE.SIGN_IN:
          appPageRender = (<SignIn
            authorizationError={authorizationError}
            onSubmit={login}
          />);
      }

      return appPageRender;
    };

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {renderMainScreen()}
          </Route>
          <Route exact path="/movie">
            {<Movie
              film={filteredFilms[0]}
              onCardClick={() => {}}
            />}
          </Route>
          <Route exact path="/login">
            {<SignIn
              authorizationError={authorizationError}
              onSubmit={login}
            />}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  authorizationError: getAuthorizationError(state),
  currentAppPage: getCurrentPage(state),
  promoFilm: getPromoFilm(state),
  films: getAllFilms(state),
  filteredFilms: getFilteredFilms(state),
  filmLength: getCurrentViewFilmCard(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  onSignInClick() {
    dispatch(AppActionCreator.changeAppPage(APP_PAGE.SIGN_IN));
  },
  onViewBtnClick(length) {
    dispatch(AppActionCreator.setViewFilmCard(length));
  }
});

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  authorizationError: PropTypes.bool.isRequired,
  currentAppPage: PropTypes.string.isRequired,
  onSignInClick: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  promoFilm: PropTypes.object.isRequired,
  filteredFilms: PropTypes.arrayOf(PropTypes.object).isRequired,
  filmLength: PropTypes.number.isRequired,
  onViewBtnClick: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
