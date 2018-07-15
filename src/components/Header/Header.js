import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({onClick }) => (
  <div className="header w3-bar w3-top w3-white w3-xlarge">
    <div className="w3-content largeur">
      <button className="w3-bar-item w3-button w3-hide-large w3-hover-none lien" onClick={() => onClick()}><i className="fa fa-bars"></i>  Data team</button>
      <span className="w3-bar-item w3-left w3-hide-medium w3-hide-small"><i className="fas fa-database"></i> Data team</span>
      <a href="#" className="w3-medium w3-bar-item w3-button w3-hide-medium w3-hide-small w3-left w3-hover-none lien">Project</a>
      <a href="#" className="w3-medium w3-bar-item w3-button w3-hide-medium w3-hide-small w3-left w3-hover-none lien">Add component</a>
    </div>
  </div>
)

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Header;
