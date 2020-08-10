import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FilmList from '../film-list/film-list.jsx';
import GenreList from '../genre-list/genre-list.jsx';
import SignHeader from '../sign-in/header/sign-header.jsx';
import {ShowBtn} from '../show-btn/show-btn.jsx';
import {getAuthorizationError} from '../../reducer/user/selectors';
import {getPromoFilm} from '../../reducer/data/selectors';
import {getFilteredFilms} from '../../reducer/app/selectors';
import {getViewFilmCard} from '../../reducer/app/selectors';
import {ActionCreator as AppActionCreator} from '../../reducer/app/app';
import {Operation} from '../../reducer/data/data';
import history from '../../history';

const getIconForList = (isFavor) => isFavor ? `#in-list` : `#add`;

export const Main = ({promoFilm, filteredFilms, filmViewLength, onViewBtnClick, onViewListClick}) => <React.Fragment>
  <section className="movie-card">
    <div className="movie-card__bg">
      <img src={promoFilm.background} alt="The Grand Budapest Hotel" />
    </div>

    <h1 className="visually-hidden">WTW</h1>

    <header className="page-header movie-card__head">
      <div className="logo">
        <a className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <SignHeader />

    </header>

    <div className="movie-card__wrap">
      <div className="movie-card__info">
        <div className="movie-card__poster">
          <img src={promoFilm.posterImage} alt={`${promoFilm.title} poster`} width="218" height="327" />
        </div>

        <div className="movie-card__desc">
          <h2 className="movie-card__title">{promoFilm.title}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{promoFilm.genre}</span>
            <span className="movie-card__year">{promoFilm.year}</span>
          </p>
          <div className="movie-card__buttons">

            <button
              onClick={() => {
                history.push(`/films/${promoFilm.id}/player`);
              }}
              className="btn btn--play movie-card__button" type="button">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>

            <button
              onClick={() => onViewListClick(promoFilm)}
              className="btn btn--list movie-card__button" type="button">
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref={getIconForList(promoFilm.inFavorites)}></use>
              </svg>
              <span>My list</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div className="page-content">
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenreList />

      <FilmList films={filteredFilms.slice(0, filmViewLength)} />

      {filteredFilms.length >= filmViewLength && <ShowBtn filmLength={filmViewLength} onViewBtnClick={onViewBtnClick} />}

    </section>

    <footer className="page-footer">
      <div className="logo">
        <a className="logo__link logo__link--light">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="copyright">
        <p>© 2020 What to watch Ltd.</p>
      </div>
    </footer>
  </div>
</React.Fragment>;

Main.propTypes = {
  promoFilm: PropTypes.object.isRequired,
  filteredFilms: PropTypes.arrayOf(PropTypes.object).isRequired,
  filmViewLength: PropTypes.number.isRequired,
  authorizationError: PropTypes.bool.isRequired,
  onViewBtnClick: PropTypes.func.isRequired,
  onViewListClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  promoFilm: getPromoFilm(state),
  filteredFilms: getFilteredFilms(state),
  filmViewLength: getViewFilmCard(state),
  authorizationError: getAuthorizationError(state),
});

const mapDispatchToProps = (dispatch) => ({
  onViewBtnClick(length) {
    dispatch(AppActionCreator.setViewFilmCard(length));
  },
  onViewListClick(movie) {
    dispatch(Operation.changeFavorStatus(movie));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main); // mapDispatchToProps
