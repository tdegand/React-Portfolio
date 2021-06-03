import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/normalize.css';
import './styles/index.css';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-175982896-1') // add your tracking id here.
ReactGA.pageview(window.location.pathname + window.location.search)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
