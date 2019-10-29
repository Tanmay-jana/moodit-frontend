/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import "./MainHeader.css";
import logo from "../../assets/MooditLogo.png";
import { connect } from "react-redux";
import {openSideNav, closeSideNav} from '../../action/actions'


class MainHeader extends Component {
  state = {
    scrolled: false
  };

  mobNav = () => {
    if(this.props.sideNav === false) {
      this.props.openSideNav();
    } else {
      this.props.closeSideNav();
    }
  }

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
          <a href = "/"><img className = "main-logo" src={logo} alt="logo" /></a>
        </div>
        <i onClick = {this.mobNav} className="fa fa-bars"></i>
        <div className = "header-right">
            <a className = "nav-link" href = "/#why">Why</a>
            <a className = "nav-link" href = "/#how">How</a>
            <a className = "nav-link" href = "https://apps.apple.com/gb/app/moodit/id1445122054" target = "_blank">Download App</a>
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

export default connect (mapStateToProps, {openSideNav, closeSideNav})(MainHeader);