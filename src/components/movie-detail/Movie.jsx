import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '../tabs/Tabs.jsx';
import {withActiveTab} from '../../hocs/withActiveTab.jsx';
import {connect} from 'react-redux';
import {getCurrentMovieById, getFilteredGenreFilm} from '../../reducer/data/selectors';
import {getAuthorizationStatus} from '../../reducer/user/selectors';
import FilmCard from '../film-card/film-card.jsx';
import {reviews} from '../../mocks/films';
import Details from './Details/Details.jsx';
import Reviews from './Reviews/Reviews.jsx';
import Overview from './Overview/Overview.jsx';
import {Link} from 'react-router-dom';
import SignHeader from '../sign/Header/SignHeader.jsx';


export const MoviePage = (props) => {
  const {currentMovie, isActive, onTabClick, filteredGenreFilms, authorizationStatus} = props;
  const {title, genre, year, background, backgroundColor, posterImage} = currentMovie;

  const getComponentByFilter = (filter) => {
    switch (filter) {
      case `Details`:
        return <Details filmContent={currentMovie} />;
      case `Reviews`:
        return <Reviews reviews={reviews} />;
      default:
        return <Overview filmContent={currentMovie} />;
    }
  };

  return <React.Fragment><section
    style={{backgroundColor}}
    className="movie-card movie-card--full">
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

        <SignHeader status={authorizationStatus} />

      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__desc">
          <h2 className="movie-card__title">{title}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{genre}</span>
            <span className="movie-card__year">{year}</span>
          </p>

          <div className="movie-card__buttons">

            <Link to={`/movies/${currentMovie.id}/player`}>
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
            </Link>

            <button className="btn btn--list movie-card__button" type="button">
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
              </svg>
              <span>My list</span>
            </button>
            <a href="add-review.html" className="btn movie-card__button">Add review</a>
          </div>
        </div>
      </div>
    </div>

    <div className="movie-card__wrap movie-card__translate-top">
      <div className="movie-card__info">
        <div className="movie-card__poster movie-card__poster--big">
          <img src={posterImage} alt={title + ` poster`} width="218" height="327" />
        </div>

        <div className="movie-card__desc">
          <nav className="movie-nav movie-card__nav">

            <Tabs onTabClick={onTabClick} isActive={isActive}/>

          </nav>

          {getComponentByFilter(isActive)}

        </div>
      </div>
    </div>
  </section>

  <div className="page-content">
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__movies-list">
        {filteredGenreFilms.map((el) => (
          <FilmCard
            key={el.id}
            film={el}
          />)
        )}
      </div>
    </section>

    <footer className="page-footer">
      <div className="logo">
        <Link to='/' className="logo__link logo__link--light">
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
  </React.Fragment>;
};

const mapStateToProps = (state, props) => {
  const currentMovie = getCurrentMovieById(state, props.match.params.id);

  return {
    currentMovie,
    filteredGenreFilms: getFilteredGenreFilm(state, currentMovie),
    authorizationStatus: getAuthorizationStatus(state),
  };
};


MoviePage.propTypes = {
  onTabClick: PropTypes.func.isRequired,
  isActive: PropTypes.string.isRequired,
  filteredGenreFilms: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentMovie: PropTypes.object.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(withActiveTab(MoviePage));
