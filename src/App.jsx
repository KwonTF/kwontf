import React from 'react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

import MetaData from './Data/MetaData';
import Navbar from './Component/Navbar/Navbar';
import TextGlicher from './Component/TextGlitcher/TextGlicher';
import ImageGrid from './Component/ImageGrid/ImageGrid';
import Credit from './Component/Credit/Credit';
import VideoList from './Component/VideoList/VideoList';

import './App.css';

configureAnchors({ offset: -100, scrollDuration: 400 });

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <div className="content">
        <div className="title">
          <h1>
            <TextGlicher text="Kwon Media Gallery" />
          </h1>
          <h2>Still Image / BGA</h2>
        </div>
        <ScrollableAnchor id="Image">
          <div>
            <ImageGrid dataSource={MetaData.Image} />
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id="Video">
          <div>
            <VideoList dataSource={MetaData.Video} />
          </div>
        </ScrollableAnchor>
      </div>
      <footer>
        <Credit />
      </footer>
    </div>
  );
}

export default App;
