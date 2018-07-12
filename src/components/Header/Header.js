import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  handleMenuClick(){
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
        overlayBg.style.display = "none";
    } else {
        mySidebar.style.display = 'block';
        overlayBg.style.display = "block";
    }    
  }

  render() {
    return (
      <div className="header w3-bar w3-top w3-black w3-large">
        <button className="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey" onClick={this.handleMenuClick}><i className="fa fa-bars"></i>  Menu</button>
        <span className="w3-bar-item w3-right">Logo</span>
      </div>
    );
  }
}

export default Header;
