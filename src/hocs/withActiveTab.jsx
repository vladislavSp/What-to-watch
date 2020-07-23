import React, {PureComponent} from 'react';

export const withActiveTab = (Component) => {
  class WithActiveTab extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isActive: `Overview`,
      };

      this.handleMouseClick = this.handleMouseClick.bind(this);
    }

    handleMouseClick(isActive) {
      this.setState({isActive});
    }

    render() {
      return (
        <Component
          onTabClick = {this.handleMouseClick}
          isActive={ this.state.isActive }
          {...this.props}
        />
      );
    }
  }

  return WithActiveTab;
};
