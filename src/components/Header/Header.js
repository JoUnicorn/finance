import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({id, onClick }) => (
  <div className="header w3-bar w3-top w3-black w3-large">
    <button className="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey" onClick={() => onClick(id)}><i className="fa fa-bars"></i>  Menu</button>
    <span className="w3-bar-item w3-right">Logo</span>
  </div>
)

Header.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Header;
