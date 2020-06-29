import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({scrVideo, poster}) => <React.Fragment>
  <video poster={ poster } autoPlay={true} loop muted width="100%" height="100%">
    <source src={ scrVideo } />
  </video>
</React.Fragment>;

VideoPlayer.propTypes = {
  poster: PropTypes.string.isRequired,
  scrVideo: PropTypes.string.isRequired,
};

export default VideoPlayer;
