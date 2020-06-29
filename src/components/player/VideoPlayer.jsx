import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
    this.delayVideoTimer = null;
  }

  componentDidMount() {
    const video = this.videoRef.current;

    video.src = this.props.scrVideo;
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
    const {poster} = this.props;

    return (<video ref={this.videoRef}
      poster={ poster }
      autoPlay={false}
      width="280"
      height="175">
    </video>);
  }
}

VideoPlayer.propTypes = {
  poster: PropTypes.string.isRequired,
  scrVideo: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default VideoPlayer;
