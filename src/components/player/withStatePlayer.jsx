import React, {PureComponent} from 'react';

export const withStatePlayer = (Component) => {
  return class withActivePlayer extends PureComponent {
    constructor(props) {
      super(props);
      this.videoRef = React.createRef();
    }

    componentDidMount() {
      const video = this.videoRef.current;
      console.log(video);
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
          ref={this.videoRef}
          {...this.props}
        />
      );
    }
  };
};
