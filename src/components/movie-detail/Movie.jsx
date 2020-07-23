import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '../tabs/Tabs.jsx';
import {withActiveTab} from '../../hocs/withActiveTab.jsx';

const film = {title: `Gangs of new york`, producer: `Martin Scorsese`, genre: `Crime`, year: 2002, rating: `8.8`, actors: [`Leonardo DiCaprio`, `Cameron Diaz`, `Daniel Day-Lewis`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`], description: `In 1862, Amsterdam Vallon returns to the Five Points area of New York City seeking revenge against Bill the Butcher, his father's killer.`, posterImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Gangs_of_New_York_Poster.jpg`, previewImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/gangs_of_new_york.jpg`, background: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/gangs_of_new_york.jpg`, video: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`, videoPreview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`};
const filterProp = 1;

const reviews = [{
  id: 0,
  text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
  author: `Kate Muir`,
  date: `December 24, 2016`,
  rating: `8,9`
},
{
  id: 1,
  text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
  author: `Kate Muir`,
  date: `December 24, 2016`,
  rating: `8,9`
}];


const Movie = (props) => {
  const {isActive, onTabClick} = props;

  const getComponentByFilter = (filter) => {
    switch (filter) {
      case `Details`:
        return <div className="movie-card__text movie-card__row">
          <div className="movie-card__text-col">
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Director</strong>
              <span className="movie-card__details-value">{film.producer}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Starring</strong>
              <span className="movie-card__details-value"></span>
            </p>
          </div>

          <div className="movie-card__text-col">
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Run Time</strong>
              <span className="movie-card__details-value">{film.time}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Genre</strong>
              <span className="movie-card__details-value">{film.genre}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Released</strong>
              <span className="movie-card__details-value">{film.year}</span>
            </p>
          </div>
        </div>;
      case `Reviews`:
        return <div className="movie-card__reviews movie-card__row">
          <div className="movie-card__reviews-col">
            {reviews.map((el) => {
              return (<div key={el.id} className="review">
                <blockquote className="review__quote">
                  <p className="review__text">{el.text}</p>

                  <footer className="review__details">
                    <cite className="review__author">{el.author}</cite>
                    <time className="review__date" dateTime={el.date}>{el.date}</time>
                  </footer>
                </blockquote>

                <div className="review__rating">{el.rating}</div>
              </div>);
            })}

          </div>
        </div>;
      default:
        return <React.Fragment>
          <div className="movie-rating">
            <div className="movie-rating__score">{film.rating}</div>
            <p className="movie-rating__meta">
              <span className="movie-rating__level">-</span>
              <span className="movie-rating__count">{0} ratings</span>
            </p>
          </div>

          <div className="movie-card__text">
            <p>{film.description}</p>

            <p className="movie-card__director"><strong>Director: {film.producer}</strong></p>

            <p className="movie-card__starring"><strong>Starring: {film.actors.map((el) => `${el}, `) } and other</strong></p>
          </div>
        </React.Fragment>;
    }
  };

  return <section className="movie-card movie-card--full">
    <div className="movie-card__hero">
      <div className="movie-card__bg">
        <img src={film.background} alt={film.name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__desc">
          <h2 className="movie-card__title">{film.title}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{film.genre}</span>
            <span className="movie-card__year">{film.year}</span>
          </p>

          <div className="movie-card__buttons">
            <button className="btn btn--play movie-card__button" type="button">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
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
          <img src={film.posterImage} alt={film.title + ` poster`} width="218" height="327" />
        </div>

        <div className="movie-card__desc">
          <nav className="movie-nav movie-card__nav">

            <Tabs onTabClick={onTabClick} isActive={isActive}/>

          </nav>

          {getComponentByFilter(isActive)}

        </div>
      </div>
    </div>
  </section>;
};

Movie.propTypes = {
  onTabClick: PropTypes.func.isRequired,
  isActive: PropTypes.string.isRequired,
};

export default withActiveTab(Movie);
