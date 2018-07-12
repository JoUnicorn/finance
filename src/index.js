import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div className="finance">
    <Header />
    <Content />
  </div>,
  document.getElementById('root')
);
registerServiceWorker();
