import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import PlayerControls from "../player-controls/player-controls.jsx";
import {withVideoState} from "../../hocs/with-video-state.jsx";
import {getCurrentMovieById} from "../../reducer/data/selectors";

export const FullScreenPlayer = (props) => {
  const {
    currentMovie,
    videoRef,
    isPlaying,
    onPlayPause,
    onFullScreen,
    history
  } = props;
  const {videoPreview, title, poster} = currentMovie;

  const renderBtnState = (state) => {
    return (
      <React.Fragment>
        {state ? (
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#pause"></use>
          </svg>
        ) : (
          <svg id="play-s" viewBox="0 0 19 19">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0L19 9.5L0 19V0Z"
              fill="#EEE5B5"
            ></path>
          </svg>
        )}
        <span>{state ? `Pause` : `Play`}</span>
      </React.Fragment>
    );
  };

  return (
    <div className="player">
      <video
        autoPlay={true}
        src={videoPreview}
        ref={videoRef}
        className="player__video"
        poster={poster}
      ></video>

      <button type="button" className="player__exit" onClick={history.goBack}>
        Exit
      </button>

      <div className="player__controls">
        <PlayerControls videoRef={videoRef} />

        <div className="player__controls-row">
          <button onClick={onPlayPause} type="button" className="player__play">
            {renderBtnState(isPlaying)}
          </button>
          <div className="player__name">{title}</div>

          <button
            onClick={onFullScreen}
            type="button"
            className="player__full-screen"
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

FullScreenPlayer.propTypes = {
  videoRef: PropTypes.object,
  currentMovie: PropTypes.object.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onPlayPause: PropTypes.func.isRequired,
  onFullScreen: PropTypes.func.isRequired,
  history: PropTypes.object
};

const mapStateToProps = (state, props) => ({
  currentMovie: getCurrentMovieById(state, props.match.params.id)
});

export default connect(mapStateToProps)(withVideoState(FullScreenPlayer));
