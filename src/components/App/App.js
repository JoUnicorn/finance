import React, { Component } from 'react';
import './App.css';
import Content from '../Content/Content';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Overlaybg from '../Overlaybg/Overlaybg';
import Footer from '../Footer/Footer';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      menuOpen:false,
    }
  }

  handleMenuOpenClick = () => {
    this.setState({ menuOpen: true })
  }

  handleMenuCloseClick = () => {
    this.setState({ menuOpen: false })
  }

  render() {
    return (
      <div className="finance">
        <Header
          onClick={this.handleMenuOpenClick}
        />
        {this.state.menuOpen && <Sidebar onClick={this.handleMenuCloseClick} />}
        {this.state.menuOpen && <Overlaybg onClick={this.handleMenuCloseClick} />}
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
