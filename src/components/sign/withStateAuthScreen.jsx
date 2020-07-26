import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export const withStateSignInScreen = (Component) => {
  class withSignInState extends PureComponent {
    constructor(props) {
      super(props);
      this.loginRef = React.createRef();
      this.passwordRef = React.createRef();
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
      const {onSubmit} = this.props;

      evt.preventDefault();

      onSubmit({
        login: this.loginRef.current.value,
        password: this.passwordRef.current.value,
      });
    }

    render() {
      return (
        <Component
          onSubmitForm = {this.handleSubmit}
          loginRef={this.loginRef}
          passwordRef={this.passwordRef}
          {...this.props}
        />
      );
    }
  }

  withSignInState.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  return withSignInState;
};
