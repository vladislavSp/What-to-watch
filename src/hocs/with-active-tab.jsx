import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {compose} from "redux";
import {Operation} from "../reducer/data/data";

export const withActiveTab = (Component) => {
  class WithActiveTab extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isActive: `Overview`
      };

      this.handleMouseClick = this.handleMouseClick.bind(this);
    }

    componentDidMount() {
      this.props.onLoadComments(this.props.movie);
    }

    handleMouseClick(isActive) {
      this.setState({isActive});
    }

    render() {
      return (
        <Component
          onTabClick={this.handleMouseClick}
          isActive={this.state.isActive}
          {...this.props}
        />
      );
    }
  }

  WithActiveTab.propTypes = {
    movie: PropTypes.object.isRequired,
    onLoadComments: PropTypes.func
  };

  return WithActiveTab;
};

const mapDispatchToProps = (dispatch) => ({
  onLoadComments(movie) {
    dispatch(Operation.loadComments(movie));
  }
});

export default compose(connect(null, mapDispatchToProps), withActiveTab);
