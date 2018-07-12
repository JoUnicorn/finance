import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div className="finance">
    <Header />
    <Content />
    <Footer />
  </div>,
  document.getElementById('root')
);
registerServiceWorker();
