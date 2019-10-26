import React, { Component } from "react";
import "./Section1.css";
import walking from "../../assets/MAINILLUSTRATION@2x.png";

export default class Section1 extends Component {
  render() {
    return (
      <div className="section1-container">
        <img className="walking-img" src={walking} alt="walking_image" />
        <div className="section1-text-container">
          <h3>
            We are in the midst of a growing mental health crisis globally
          </h3>
          <p>
            An overwhelming percentage of the population will experience anxiety
            or depression in any given year. Moodit was created by a
            psychiatrist and is founded on the principle that awareness and
            insights into thoughts and emotions is the cornerstone of mental
            wellness.
          </p>
          <p>
            Moodit is a social platform designed to empower people to share how
            they feel, track their moods and get real time data on how many
            people feel similar and receive relevant Moodhacks ™ from people
            around the world to help improve or maintain a mood.
          </p>
        </div>
      </div>
    );
  }
}
