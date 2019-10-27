import React, { Component } from "react";
import "./LandingPage.css";
import Header from "../Mainheader/MainHeader";
import maditation from "../../assets/MAINILLLUSTRATION.png";
import MobileNav from '../MobileNav/MobileNav'

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
              <form className = "know-more-form">
                <input className = "email" type="email" name="email" placeholder="Enter your email" />
                <input className = "submit" type="submit" value="KNOW MORE" />
              </form>
            </div>
          </div>
          <img className="maditation-img" src={maditation} alt="img" />
        </div>
      </div>
    );
  }
}
