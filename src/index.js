import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import Header from './components/Header/Header';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div className="finance">
    <Header />
    <App />
  </div>,
  document.getElementById('root')
);
registerServiceWorker();
