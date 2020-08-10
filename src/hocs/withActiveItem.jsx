import React, {PureComponent} from "react";

export const withActiveCard = (Component) => {
  class WithActiveCard extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeCard: null,
        isActive: false
      };

      this.handleMouseEnter = this.handleMouseEnter.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter(activeCard) {
      this.setState({isActive: true, activeCard});
    }

    handleMouseLeave() {
      this.setState({isActive: false, activeCard: null});
    }

    render() {
      return (
        <Component
          isActive={this.state.isActive}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          {...this.props}
        />
      );
    }
  }

  return WithActiveCard;
};
