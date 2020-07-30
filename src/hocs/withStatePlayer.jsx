import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export const withStatePlayer = (Component) => {
  class withActivePlayer extends PureComponent {
    constructor(props) {
      super(props);
      this.videoRef = React.createRef();
    }

    componentDidMount() {
      const video = this.videoRef.current;
      video.src = this.props.srcVideo;
      video.muted = true;
    }

    componentWillUnmount() {
      const video = this.videoRef.current;
      video.src = ``;
    }

    componentDidUpdate() {
      const video = this.videoRef.current;

      const playVideo = () => {
        video.play();
      };

      if (this.props.isPlaying) {
        this.delayVideoTimer = setTimeout(playVideo, 1000);
      } else {
        if (this.delayVideoTimer) {
          clearTimeout(this.delayVideoTimer);
          this.delayVideoTimer = null;
        }
        video.load();
      }
    }

    render() {
      return (
        <Component
          videoRef = {this.videoRef}
          {...this.props}
        />
      );
    }
  }

  withActivePlayer.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    srcVideo: PropTypes.string.isRequired
  };

  return withActivePlayer;
};


