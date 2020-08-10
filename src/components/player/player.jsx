import React from "react";
import PropTypes from "prop-types";
import {withStatePlayer} from "../../hocs/withStatePlayer.jsx";

const VideoPlayer = (props) => {
  const {poster, videoRef} = props;

  return (
    <video
      ref={videoRef}
      poster={poster}
      autoPlay={false}
      width="280"
      height="175"
    ></video>
  );
};

VideoPlayer.propTypes = {
  poster: PropTypes.string.isRequired,
  videoRef: PropTypes.object.isRequired
};

export default withStatePlayer(VideoPlayer);
