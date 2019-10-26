import React, { Component } from "react";
import "./Section4.css";
import infi from "../../assets/infi.png";
import left from "../../assets/LEFT.png";
import right from "../../assets/RIGHT.png";

export default class Section4 extends Component {
  render() {
    return (
      <div className="section4-container">
        <h2>Moodit is made just for you!</h2>
        <div className="mode-block">
          {/* <div className = "arrow"><i className="fa fa-caret-left"></i></div> */}
          <img className="arrow-img" src={left} alt="left" />
          <img className="info-image" src={infi} alt="info" />
          <img className="arrow-img" src={right} alt="right" />
          {/* <div className = "arrow"><i class="fa fa-caret-right"></i></div> */}
        </div>
        <div className="info-text">
          <h2>Safety Mode</h2>
          <p>
            Moodit incorporates a safety mode for when things get really
            difficult. Safety mode has breathing exercises as well as an
            emergency contact feature that sends alerts and locations to the
            emergency contacts.
          </p>
        </div>
      </div>
    );
  }
}
