import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {REGEX_MAIL} from "../const/const";
import history from "../history";

export const withStateAuthScreen = (Component) => {
  class WithStateAuthScreen extends PureComponent {
    constructor(props) {
      super(props);
      this.loginRef = React.createRef();
      this.passwordRef = React.createRef();
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleLoginChange = this.handleLoginChange.bind(this);

      this.state = {
        isValidLogin: false,
        isValidPassword: false
      };
    }

    handleLoginChange(evt) {
      const {value} = evt.target;
      this.setState({
        isValidLogin: REGEX_MAIL.test(value)
      });
    }

    handlePasswordChange(evt) {
      const {value} = evt.target;

      if (value.length > 3) {
        this.setState({
          isValidPassword: true
        });
      } else {
        this.setState({
          isValidPassword: false
        });
      }
    }

    handleSubmit(evt) {
      const {login} = this.props;
      const {isValidLogin, isValidPassword} = this.state;
      evt.preventDefault();

      if (isValidLogin && isValidPassword) {
        login({
          login: this.loginRef.current.value,
          password: this.passwordRef.current.value
        });
        history.push(`/`);
      }
    }

    render() {
      const {authorizationError} = this.props;

      return (
        <Component
          onSubmitForm={this.handleSubmit}
          loginRef={this.loginRef}
          passwordRef={this.passwordRef}
          onLoginChange={this.handleLoginChange}
          onPasswordChange={this.handlePasswordChange}
          isValidLogin={this.state.isValidLogin}
          isValidPass={this.state.isValidPassword}
          authorizationError={authorizationError}
          {...this.props}
        />
      );
    }
  }

  WithStateAuthScreen.propTypes = {
    login: PropTypes.func.isRequired,
    history: PropTypes.object,
    authorizationError: PropTypes.bool
  };

  return WithStateAuthScreen;
};
