import React, { Component } from 'react';
import './App.css';
import Content from '../Content/Content';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class App extends Component {

  handleCardClick = id => {
    console.log(id)
  }

  render() {
    return (
      <div className="finance">
        <Header
          id="mySidebar"
          onClick={this.handleCardClick}
        />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
