import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ImageViewer from '../ImageViewer/ImageViewer';

import './ImageGridCell.css';

class ImageGridCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showViewer: false,
    };
  }

  render() {
    const imgSrc = `/static/media/image/image/${this.props.id}.png`;
    const textRows = this.props.text.split('<br />');
    return (
      <div
        className="ImageGridCell"
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
          className={`thumb image${this.props.id}`}
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
            <ImageViewer
              src={imgSrc}
              alt={textRows.join('')}
            />
          )
        }
      </div>
    );
  }
}

ImageGridCell.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default ImageGridCell;
