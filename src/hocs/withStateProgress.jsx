import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {HUNDRED_PERCENT} from '../const/const';
import {formatingTime} from '../utils/utils';

export const withStateProgress = (Component) => {
  class WithStateProgress extends PureComponent {
    constructor(props) {
      super(props);

      this.video = null;

      this.state = {
        remainingTime: 0,
        progress: 0,
      };
    }

    componentDidMount() {
      this.video = this.props.videoRef.current;
      this.video.onloadedmetadata = () => this.setState({timeLeft: this.video.duration});
      this.video.ontimeupdate = () => this.handleTimeUpdate(this.video.currentTime, this.video.duration);
    }

    componentWillUnmount() {
      this.video.onloadedmetadata = null;
      this.video.ontimeupdate = null;
    }

    handleTimeUpdate(currentTime, duration) {
      const remainingTime = duration - currentTime;
      const progress = currentTime / duration * HUNDRED_PERCENT;

      this.setState({remainingTime, progress});
    }

    render() {
      const {remainingTime, progress} = this.state;

      return (<Component
        {...this.props}
        remainingTime={formatingTime(remainingTime)}
        progress={progress}
      />);
    }
  }

  WithStateProgress.propTypes = {
    videoRef: PropTypes.object.isRequired,
  };

  return WithStateProgress;
};
