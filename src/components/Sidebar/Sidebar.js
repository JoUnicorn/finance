import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {

  handleMenuClick(){
    mySidebar.style.display = "none";
    overlayBg.style.display = "none";    
  }

  render() {
    return (
      <nav className="w3-sidebar w3-collapse w3-white w3-animate-left Sidebar" id="mySidebar"><br>
        <div className="w3-container">
          <h5>Dashboard</h5>
        </div>
        <hr>
        <div className="w3-bar-block">
          <a href="#" className="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black" onClick={this.handleMenuClick} title="close menu"><i className="fa fa-remove fa-fw"></i>  Close Menu</a>
          <a href="#" className="w3-bar-item w3-button w3-padding w3-blue"><i className="fa fa-users fa-fw"></i>  Overview</a>
          <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-eye fa-fw"></i>  Views</a>
        </div>
      </nav>
      <div className="w3-overlay w3-hide-large w3-animate-opacity" onClick={this.handleMenuClick} style="cursor:pointer" title="close side menu" id="myOverlay"></div>
    );
  }
}

export default Sidebar;
