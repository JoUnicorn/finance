import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
  render() {
    return (
      <div className="w3-main Content">
        <header className="Content-header">
          <h1 className="Content-title">Welcome to React</h1>
        </header>
        <p className="Content-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Content;
