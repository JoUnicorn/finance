import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
  render() {
    return (
      <div className="w3-main Content">
        <header className="Content-header">
          <h1 className="Content-title">To get to know the data and innovation team, <a href="#" className="lien"> click here </a></h1>
        </header>
        <p className="Content-intro w3-content">
          <div className="w3-card-4 card w3-white">

            <header className="w3-container corp cardH">
              <h1 className="w3-left"><b>Data team helps other teams succeed.</b></h1>
            </header>

            <div className="w3-container corp">
              <div className="w3-row">
               <div className="w3-third w3-container">
                 <h2 className="w3-left">Build apps fast, without managing infrastructure</h2>
               </div>
               <div className="w3-third w3-container">
                 <h2>w3-third</h2>
               </div>
               <div className="w3-third w3-container">
                 <h2>w3-third</h2>
               </div>
             </div>
            </div>

            <footer className="w3-container corp cardF">
              <h5 className="w3-left">Footer</h5>
            </footer>

          </div>
        </p>
      </div>
    );
  }
}

export default Content;
