import React from "react";
import PropTypes from "prop-types";
import {withStateProgress} from "../../hocs/withStateProgress.jsx";

export const PlayerControls = (props) => {
  const {remainingTime, progress} = props;

  return (
    <div className="player__controls-row">
      <div className="player__time">
        <progress
          className="player__progress"
          value={progress}
          max="100"
        ></progress>
        <div className="player__toggler" style={{left: `${progress}%`}}>
          Toggler
        </div>
      </div>
      <div className="player__time-value">{remainingTime}</div>
    </div>
  );
};

PlayerControls.propTypes = {
  progress: PropTypes.number.isRequired,
  remainingTime: PropTypes.string.isRequired
};

export default withStateProgress(PlayerControls);
