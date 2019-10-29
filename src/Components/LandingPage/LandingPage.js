/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import "./LandingPage.css";
import Header from "../Mainheader/MainHeader";
import maditation from "../../assets/MAINILLLUSTRATIONCopy.png";
import maditation1 from "../../assets/MAINILLLUSTRATIONCopy1.png";
import MobileNav from '../MobileNav/MobileNav';
import appStore from '../../assets/app-store.png'

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page-container">
        <Header />
        <MobileNav/>
        <div className="landing-page-body">
          <div className="landing-left">
            <div className="text-container">
              <p className="text-body">
                We are <span>Moodit</span>, We are making{" "}
                <span>Mental Health</span> Cool.
              </p>
              <a className = "appstore-link" href = "https://apps.apple.com/gb/app/moodit/id1445122054" target = "_blank"><img className = "store-app-img" src = {appStore} alt = "appStore"/></a>

              {/* <form className = "know-more-form">
                <input className = "email" type="email" name="email" placeholder="Enter your email" />
                <input className = "submit" type="submit" value="KNOW MORE" />
              </form> */}
            </div>
          </div>
          <img className="maditation-img floating" src={maditation} alt="img" />
          <img className="maditation-img1 floating" src={maditation1} alt="img" />
        </div>
      </div>
    );
  }
}
