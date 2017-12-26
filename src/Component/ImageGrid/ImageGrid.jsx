import React from 'react';
import PropTypes from 'prop-types';

import ImageGridCell from '../ImageGridCell/ImageGridCell';

import './ImageGrid.css';

function ImageGrid({ dataSource }) {
  return (
    <div className="ImageGrid">
      <h3 className="grid-title">Image</h3>
      <div className="grid-container">
        {
          dataSource.map(elem => (
            <ImageGridCell
              id={elem.id}
              text={elem.text}
              key={elem.id}
            />
            ))
        }
      </div>
    </div>
  );
}

ImageGrid.propTypes = {
  dataSource: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ImageGrid;
