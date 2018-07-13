import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Overlaybg.css';

const Overlaybg = ({onClick }) => (
  <div className="w3-overlay w3-hide-large w3-animate-opacity Overlaybg" onClick={() => onClick()} title="close side menu"></div>
)

Overlaybg.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Overlaybg;
