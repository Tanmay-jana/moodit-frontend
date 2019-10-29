/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import "./Section5.css";
import mobile from "../../assets/MOCK 2.png";
// import artwork from "../../assets/Artwork@2x.png";
import appstore from '../../assets/app-store.png'

export default class Section5 extends Component {
  render() {
    return (
      <div className="section5-container">
        
        <img className="mobile-img" src={mobile} alt="mobile" />
        {/* <img className="artwork" src={artwork} alt="artwork" /> */}
        <div className="app-download-container">
          <h2>Now available on public beta!</h2>
          <p>
            Moodit is available on appstore for public Beta! If you want to work
            with us, please write to team@moodit.com.
          </p>
          <a href = "https://apps.apple.com/gb/app/moodit/id1445122054" target = "_blank"><img className = "app-store-img" src = {appstore} alt = "appstore"/></a>
        </div>
        
      </div>
    );
  }
}
