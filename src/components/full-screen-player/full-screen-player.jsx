import React from 'react';
import PropTypes from 'prop-types';
import PlayerControls from '../player-controls/player-controls.jsx';
import withVideoState from '../../hocs/withVideoState.jsx';

export const FullScreenPlayer = (props) => {
  const {videoRef, currentMovie, isPlaying, onPlayPause, onFullScreen, onExitClick} = props;
  const {videoPreview, title, poster} = currentMovie;

  const renderBtnState = (state) => {
    return (<React.Fragment><svg viewBox="0 0 19 19" width="19" height="19">
      <use xlinkHref={state ? `#play-s` : `#pause`}></use>
    </svg>
    <span>{state ? `Play` : `Pause`}</span></React.Fragment>);
  };

  return (<div className="player">
    <video
      src={videoPreview}
      className="player__video"
      poster={poster}>
    </video>

    <button type="button" className="player__exit" onClick={onExitClick}>Exit</button>

    <div className="player__controls">

      <PlayerControls videoRef={videoRef} />

      <div className="player__controls-row">
        <button
          onClick={onPlayPause}
          type="button"
          className="player__play">

          {renderBtnState(isPlaying)}

        </button>
        <div className="player__name">{title}</div>

        <button
          onClick={onFullScreen}
          type="button"
          className="player__full-screen">
          <svg viewBox="0 0 27 27" width="27" height="27">
            <use xlinkHref="#full-screen"></use>
          </svg>
          <span>Full screen</span>
        </button>
      </div>
    </div>
  </div>);
};

FullScreenPlayer.propTypes = {
  videoRef: PropTypes.object.isRequired,
  currentMovie: PropTypes.object.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onPlayPause: PropTypes.func.isRequired,
  onFullScreen: PropTypes.func.isRequired,
  onExitClick: PropTypes.func.isRequired,
};

export default withVideoState(FullScreenPlayer);
