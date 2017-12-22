import React from 'react';
import PropTypes from 'prop-types';

import './ImageViewer.css';

function ImageViewer({ src, alt }) {
  return (
    <img
      className="ImageViewer"
      src={src}
      alt={alt}
    />
  );
}

ImageViewer.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageViewer;
