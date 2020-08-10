import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {connect} from "react-redux";

export const PrivateRoute = (props) => {
  const {
    render,
    path,
    exact,
    computedMatch,
    authorizationStatus,
    requiredAuthStatus,
    pathToRedirect
  } = props;
  return (
    <Route
      path={path}
      exact={exact}
      match={computedMatch}
      render={() => {
        return authorizationStatus === requiredAuthStatus ? (
          render(computedMatch)
        ) : (
          <Redirect to={pathToRedirect} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  computedMatch: PropTypes.object,
  requiredAuthStatus: PropTypes.string,
  pathToRedirect: PropTypes.string
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state)
});

export default connect(mapStateToProps)(PrivateRoute);
