/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import "./MobileNav.css";
import { connect } from "react-redux";
import Header from "../Mainheader/MainHeader";
import {closeSideNav} from '../../action/actions'


class MobileNav extends Component {
  render() {
    return (
      <div className={this.props.sideNav === true ? "topnav" : "invisible"}>
        <Header/>
        <div id="myLinks">
          <a onClick = {this.props.closeSideNav} className = "mobile-nav" href="/#why">Why</a>
          <a onClick = {this.props.closeSideNav} className = "mobile-nav" href="/#how">How</a>
          <a onClick = {this.props.closeSideNav} className = "mobile-nav" href="https://apps.apple.com/gb/app/moodit/id1445122054" target = "_blank">Download App</a>
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

export default connect (mapStateToProps, {closeSideNav})(MobileNav);
