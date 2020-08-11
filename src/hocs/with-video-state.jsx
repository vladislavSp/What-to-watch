import React from "react";

export const withVideoState = (Component) => {
  class WithVideoState extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: true
      };

      this.video = React.createRef();
      this.handlePlayPause = this.handlePlayPause.bind(this);
      this.handleFullScreen = this.handleFullScreen.bind(this);
    }

    handlePlayPause() {
      const {isPlaying} = this.state;
      if (!isPlaying) {
        this.video.current.play();
      } else {
        this.video.current.pause();
      }
      this.setState({isPlaying: !isPlaying});
    }

    handleFullScreen() {
      this.video.current.requestFullscreen();
    }

    render() {
      const {isPlaying} = this.state;

      return (
        <Component
          {...this.props}
          videoRef={this.video}
          isPlaying={isPlaying}
          onPlayPause={this.handlePlayPause}
          onFullScreen={this.handleFullScreen}
        />
      );
    }
  }

  return WithVideoState;
};
