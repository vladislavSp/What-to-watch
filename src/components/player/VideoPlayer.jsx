import React from 'react';
import PropTypes from 'prop-types';
import {withStatePlayer} from './withStatePlayer.jsx';

const VideoPlayer = (props) => {
  const {poster} = props;

  return <video
    poster={ poster }
    autoPlay={ false }
    width="280"
    height="175">
  </video>;
};

VideoPlayer.propTypes = {
  poster: PropTypes.string.isRequired,
};

export default withStatePlayer(VideoPlayer);
