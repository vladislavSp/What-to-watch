import React from 'react';
import PropTypes from 'prop-types';
import {withStateSignInScreen} from '../../hocs/withStateAuthScreen.jsx';
import {ErrorLogin, ErrorPass} from './error/error.jsx';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Operation} from '../../reducer/user/user';


export const SignIn = ({onSubmitForm, loginRef, passwordRef, onLoginChange, onPasswordChange, isValidLogin, isValidPass}) => {
  return <div className="user-page">
    <header className="page-header user-page__head">
      <div className="logo">

        <Link to="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>

      </div>

      <h1 className="page-title user-page__title">Sign in</h1>
    </header>

    <div className="sign-in user-page__content">
      <form
        action=""
        className="sign-in__form"
        onSubmit={onSubmitForm}>

        {!isValidLogin && <ErrorLogin />}
        {(isValidLogin && !isValidPass) && <ErrorPass />}

        <div className="sign-in__fields">
          <div className={ !isValidLogin ? `sign-in__field sign-in__field--error` : `sign-in__field` }>
            <input className="sign-in__input" autoComplete="off" type="email" placeholder="Email address" name="user-email" id="user-email" ref={loginRef} onChange={onLoginChange}/>
            <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
          </div>
          <div className="sign-in__field">
            <input className="sign-in__input" autoComplete="off" type="password" placeholder="Password" name="user-password" id="user-password" ref={passwordRef} onChange={onPasswordChange} />
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
        <Link to='/' className="logo__link logo__link--light">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  </div>;
};

SignIn.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
  loginRef: PropTypes.object,
  passwordRef: PropTypes.object,
  onLoginChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  isValidLogin: PropTypes.bool,
  isValidPass: PropTypes.bool,
};

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(Operation.login(authData));
  },
});

export default connect(null, mapDispatchToProps)(withStateSignInScreen(SignIn));
