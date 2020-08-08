import React from 'react';
import PropTypes from 'prop-types';
import {AuthorizationStatus} from '../../../reducer/user/user';
import {getAuthorizationStatus, getUser} from '../../../reducer/user/selectors';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {AVATAR_BASE_PATH} from '../../../const/const';

export const SignHeader = ({status, user}) => {
  const getHeaderByStatus = (authStatus) => {
    switch (authStatus) {
      case AuthorizationStatus.AUTH:
        return <Link to={`/mylist`}>
          <div className="user-block__avatar">
            <img src={`${AVATAR_BASE_PATH}${user.avatar}`} alt="User avatar" width="63" height="63" />
          </div>
        </Link>;
      default:
        return <Link to={`/login`} href="" className="user-block__link">Sign in</Link>;
    }
  };

  return (
    <div className="user-block">
      { getHeaderByStatus(status) }
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: getUser(state),
  status: getAuthorizationStatus(state),
});

SignHeader.propTypes = {
  status: PropTypes.string.isRequired,
  user: PropTypes.object,
};

export default connect(mapStateToProps)(SignHeader);
