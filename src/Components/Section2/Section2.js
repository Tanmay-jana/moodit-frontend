import React, { Component } from "react";
import "./Section2.css";
import family from "../../assets/family.png";
import meeting from "../../assets/b-meeting.png";
import list from "../../assets/filter-organization.png";

export default class Section2 extends Component {
  render() {
    return (
      <div id = "why" className="section2-container">
        <h1>The Mental Wellness Revolution</h1>
        <h2>
          Having fun online while increasing emotional literacy and emotional
          intelligence
        </h2>
        <div className="features-container">
          <div className="features">
            <div className="feature-head">
              <img src={family} alt="family" />
              <p>Understand</p>
            </div>
            <p className = "feature-body">
              The first part of the process of developing emotional li teracy
              and emotional intelligence is to understand what it is that is
              being felt, and why.
            </p>
          </div>
          <div className="features">
            <div className="feature-head">
              <img src={meeting} alt="meeting" />
              <p>Articulate</p>
            </div>
            <p className = "feature-body">
              Once the emotion and its context is understood the key is to be
              able to crystalise this into words and articulate the feeling.{" "}
            </p>
          </div>
          <div className="features">
            <div className="feature-head">
              <img src={list} alt="liat" />
              <p>Healthily Navigate</p>
            </div>
            <p className = "feature-body">
              Finally the ability to navigate a full range of emotions will
              prevent slipping into negative cycles of poor emotional
              regulation.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
