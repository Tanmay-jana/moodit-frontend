import React, { Component } from "react";
import "./MainHeader.css";
import logo from "../../assets/MooditLogo.png";

export default class MainHeader extends Component {
  render() {
    return (
      <div className="main-header-container">
        <div className = "header-left">
          <img className = "main-logo" src={logo} alt="logo" />
        </div>
        <div className = "header-right">
            <a className = "nav-link" href = "/">Why</a>
            <a className = "nav-link" href = "/">How</a>
            <a className = "nav-link" href = "/">Download App</a>
        </div>
      </div>
    );
  }
}
