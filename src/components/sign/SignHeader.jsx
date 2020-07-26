import React from 'react';
import PropTypes from 'prop-types';
import {AuthorizationStatus} from '../../reducer/user/user';

const SignHeader = ({status, onSignInClick}) => {
  const getHeaderByStatus = (authStatus) => {
    switch (authStatus) {
      case AuthorizationStatus.AUTH:
        return <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>;
      default:
        return <div className="user-block">
          <a
            onClick={onSignInClick}
            href="#"
            className="user-block__link">Sign in</a>
        </div>;
    }
  };

  return getHeaderByStatus(status);
};

SignHeader.propTypes = {
  status: PropTypes.string.isRequired,
  onSignInClick: PropTypes.func.isRequired,
};

export default SignHeader;
