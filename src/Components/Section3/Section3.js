import React, { Component } from "react";
import "./Section3.css";
import mock from '../../assets/MOCK.png'

export default class Section3 extends Component {
  render() {
    return (
      <div id = "how" className="section3-container">
        <p className="section3-header">How does it work?</p>
        <div className="blue-box">
          <div className="work-lists">
            <div className="work-list">
              <h2>Share</h2>
              <p>
                Moodit makes is super easy and intuitive to share emotions and
                the context behind them.
              </p>
            </div>
            <div className="work-list">
              <h2>Normalise</h2>
              <p>
                Moodit will advise how many people feel similar and thus
                normalise the emotions felt.
              </p>
            </div>
            <div className="work-list">
              <h2>Moodhacks</h2>
              <p>
                Moodit will suggest relevant Moodhacks to the emotions being
                felt to give crowdsourced mood boosting tips that are up/down
                voted by each user.
              </p>
            </div>
          </div>
          <img className = "mobile1-img" src = {mock} alt = "mobile"/>
        </div>
      </div>
    );
  }
}
