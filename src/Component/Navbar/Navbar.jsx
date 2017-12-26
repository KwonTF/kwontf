import React from 'react';
import { goToAnchor } from 'react-scrollable-anchor';

import './Navbar.css';

function Navbar() {
  return (
    <nav className="Navbar">
      <button
        onClick={() => { goToAnchor('Image'); }}
        className="image-button"
      >
        <span>Image</span>
      </button>
      <button
        onClick={() => { goToAnchor('Video'); }}
        className="video-button"
      >
        <span>Video</span>
      </button>
    </nav>
  );
}

export default Navbar;
