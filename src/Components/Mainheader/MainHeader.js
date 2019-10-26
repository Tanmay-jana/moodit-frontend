import React, { Component } from "react";
import "./MainHeader.css";
import logo from "../../assets/MooditLogo.png";

export default class MainHeader extends Component {
  state = {
    sideNav: false,
    scrolled: false
  };

  componentDidMount = () => {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  }

  render() {
    return (
      <div className={this.state.scrolled === false? "main-header-container": "header-solid"}>
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
