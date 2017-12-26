import React from 'react';
import ReactDOM from 'react-dom';
import WebFontLoader from 'webfontloader';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

WebFontLoader.load({
  typekit: {
    id: 'nwe8gse',
  },
});

ReactDOM.render(<App />, document.getElementById('root')); // eslint-disable-line react/jsx-filename-extension

registerServiceWorker();
