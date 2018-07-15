import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Sidebar.css';

const Sidebar = ({onClick }) => (
  <nav className="w3-sidebar w3-hide-large w3-white w3-animate-left Sidebar"><br />
    <div className="w3-container">
      <h5>Dashboard</h5>
    </div>
    <hr />
    <div className="w3-bar-block">
      <button className="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black" onClick={() => onClick()} title="close menu"><i className="fa fa-remove fa-fw"></i>  Close Menu</button>
      <a href="#" className="w3-bar-item w3-button w3-padding w3-blue"><i className="fa fa-users fa-fw"></i>  Project</a>
      <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-eye fa-fw"></i>  Add component</a>
    </div>
  </nav>
)

Sidebar.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Sidebar;
