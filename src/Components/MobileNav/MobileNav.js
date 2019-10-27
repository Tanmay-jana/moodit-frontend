import React, { Component } from "react";
import "./MobileNav.css";
import { connect } from "react-redux";
import Header from "../Mainheader/MainHeader";


class MobileNav extends Component {
  render() {
    return (
      <div className={this.props.sideNav === true ? "topnav" : "invisible"}>
        <Header/>
        <div id="myLinks">
          <a className = "mobile-nav" href="#news">Why</a>
          <a className = "mobile-nav" href="#contact">How</a>
          <a className = "mobile-nav" href="#about">Download App</a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sideNav: state.sideNav
  }
}

export default connect (mapStateToProps)(MobileNav);
