import React from 'react';
import PropTypes from 'prop-types';
import {withStateSignInScreen} from '../../hocs/withStateAuthScreen.jsx';
import Error from './Error/Error.jsx';

const SignIn = ({onSubmitForm, authorizationError, loginRef, passwordRef}) => {
  const errorStatus = authorizationError ? <Error /> : ``;

  return <div className="user-page">
    <header className="page-header user-page__head">
      <div className="logo">
        <a href="main.html" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <h1 className="page-title user-page__title">Sign in</h1>
    </header>

    <div className="sign-in user-page__content">
      <form
        action=""
        className="sign-in__form"
        onSubmit={onSubmitForm}>

        {errorStatus}

        <div className="sign-in__fields">
          <div className={ errorStatus ? `sign-in__field sign-in__field--error` : `sign-in__field` }>
            <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" ref={loginRef} />
            <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
          </div>
          <div className="sign-in__field">
            <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" ref={passwordRef} />
            <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
          </div>
        </div>
        <div className="sign-in__submit">
          <button className="sign-in__btn" type="submit">Sign in</button>
        </div>
      </form>
    </div>

    <footer className="page-footer">
      <div className="logo">
        <a href="main.html" className="logo__link logo__link--light">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  </div>;
};

SignIn.propTypes = {
  authorizationError: PropTypes.bool.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  loginRef: PropTypes.object.isRequired,
  passwordRef: PropTypes.object.isRequired,
};

export default withStateSignInScreen(SignIn);
