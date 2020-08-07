import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import SignHeader from '../sign/header/sign-header.jsx';
import FilmList from '../film-list/film-list.jsx';
import {getFavoritesMovies} from '../../reducer/app/selectors';
import {connect} from 'react-redux';

export const MyList = ({favoritesMovies}) => {
  return (<div className="user-page">
    <header className="page-header user-page__head">
      <div className="logo">

        <Link to="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>

      </div>

      <h1 className="page-title user-page__title">My list</h1>

      <SignHeader />

    </header>

    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <FilmList films={favoritesMovies} />

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
  </div>);
};

MyList.propTypes = {
  favoritesMovies: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => ({
  favoritesMovies: getFavoritesMovies(state),
});

export default connect(mapStateToProps)(MyList);
