import React from 'react';
import PropTypes from 'prop-types';

import VideoListCell from '../VideoListCell/VideoListCell';

import './VideoList.css';

function VideoList({ dataSource }) {
  return (
    <div className="VideoList">
      <h3 className="list-title">Video</h3>
      <div className="list-container">
        {
          dataSource.map(elem => (
            <VideoListCell
              id={elem.id}
              text={elem.text}
              src={elem.src}
              key={elem.id}
            />
          ))
        }
      </div>
    </div>
  );
}

VideoList.propTypes = {
  dataSource: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default VideoList;
