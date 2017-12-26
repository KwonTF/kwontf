import React, { Component } from 'react';
import PropTypes from 'prop-types';

import VideoViewer from '../VideoViewer/VideoViewer';

import './VideoListCell.css';

class VideoListCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showViewer: false,
    };
  }

  render() {
    const imgSrc = `/static/media/image/video/${this.props.id}.png`;
    const textRows = this.props.text.split('<br />');
    return (
      <div
        className="VideoListCell"
        onClick={() => {
          this.setState({
            showViewer: !this.state.showViewer,
          });
        }}
        role="presentation"
      >
        <img
          src={imgSrc}
          alt={textRows.join(' ')}
        />
        <p>
          {
            textRows.map((elem, index) => (
              <span key={elem}>
                {elem}
                {index !== textRows.length - 1 && <br />}
              </span>
            ))
          }
        </p>
        {
          this.state.showViewer && (
            <VideoViewer
              src={this.props.src}
              title={textRows.join('')}
            />
          )
        }
      </div>
    );
  }
}

VideoListCell.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default VideoListCell;
