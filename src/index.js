import React from 'react';
import ImageResponsive, {Source} from 'react-image-responsive';
// import {Image} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import theme from './toolbox/theme';
import App from './App';
import Categories from './Categories';
import Features from './Features';
import Contact from './Contact';
import './toolbox/theme.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <ThemeProvider theme={theme}>
      <App />
  </ThemeProvider>,


  document.getElementById('root'));
registerServiceWorker();
