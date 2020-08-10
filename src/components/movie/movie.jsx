import React from "react";
import PropTypes from "prop-types";
import MovieTabs from "./movie-tabs/movie-tabs.jsx";
import {connect} from "react-redux";
import {
  getCurrentMovieById,
  getFilteredGenreFilm
} from "../../reducer/data/selectors";
import FilmCard from "../film-card/film-card.jsx";
import {Link} from "react-router-dom";
import SignHeader from "../sign-in/header/sign-header.jsx";
import {Operation} from "../../reducer/data/data";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {AuthorizationStatus} from "../../reducer/user/user";
import history from "../../history";

const getIconForList = (isFavor) => (isFavor ? `#in-list` : `#add`);

export const MoviePage = (props) => {
  const {
    currentMovie,
    filteredGenreFilms,
    onViewListClick,
    authorizationStatus
  } = props;
  const {
    title,
    genre,
    year,
    background,
    backgroundColor,
    posterImage
  } = currentMovie;

  return (
    <React.Fragment>
      <section
        style={{backgroundColor}}
        className="movie-card movie-card--full"
      >
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={background} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <Link to="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <SignHeader />
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{year}</span>
              </p>

              <div className="movie-card__buttons">
                <button
                  onClick={() => {
                    history.push(`/films/${currentMovie.id}/player`);
                  }}
                  className="btn btn--play movie-card__button"
                  type="button"
                >
                  <svg id="play-s" viewBox="0 0 19 19" width="19" height="19">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 0L19 9.5L0 19V0Z"
                      fill="#EEE5B5"
                    ></path>
                  </svg>
                  <span>Play</span>
                </button>

                <button
                  onClick={() => onViewListClick(currentMovie)}
                  className="btn btn--list movie-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use
                      xlinkHref={getIconForList(currentMovie.inFavorites)}
                    ></use>
                  </svg>
                  <span>My list</span>
                </button>

                {authorizationStatus === AuthorizationStatus.AUTH ? (
                  <Link
                    to={`/films/${currentMovie.id}/review`}
                    href="add-review.html"
                    className="btn movie-card__button"
                  >
                    Add review
                  </Link>
                ) : (
                  ``
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img
                src={posterImage}
                alt={title + ` poster`}
                width="218"
                height="327"
              />
            </div>

            <MovieTabs movie={currentMovie} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__movies-list">
            {filteredGenreFilms.map((el) => (
              <FilmCard key={el.id} film={el} />
            ))}
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to="/" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2020 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

MoviePage.propTypes = {
  filteredGenreFilms: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentMovie: PropTypes.object.isRequired,
  onViewListClick: PropTypes.func,
  authorizationStatus: PropTypes.string
};

const mapStateToProps = (state, props) => {
  const currentMovie = getCurrentMovieById(state, props.match.params.id);

  return {
    currentMovie,
    filteredGenreFilms: getFilteredGenreFilm(state, currentMovie),
    authorizationStatus: getAuthorizationStatus(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  onViewListClick(movie) {
    dispatch(Operation.changeFavorStatus(movie));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
