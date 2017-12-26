import React from 'react';
import PropTypes from 'prop-types';

import './VideoViewer.css';

function VideoViewer({ src, title }) {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${src}?autoplay=1`}
      className="VideoViewer"
      title={title}
      allowFullScreen
    />
  );
}

VideoViewer.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default VideoViewer;
