import React, { Component } from 'react';
import './Cards.css';

class Cards extends Component {

  render() {
    return (
      <div className="header w3-bar w3-top w3-black w3-large">
        <button className="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey" onClick={this.handleMenuClick}><i className="fa fa-bars"></i>  Menu</button>
        <span className="w3-bar-item w3-right">Logo</span>
      </div>
    );
  }
}

export default Cards;
