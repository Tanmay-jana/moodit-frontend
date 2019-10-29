import React, { Component } from "react";
import "./Section4.css";
// import infi from "../../assets/infi.png";
import icon1 from "../../assets/ICON.png";
import icon2 from "../../assets/ICON2.png";
import icon3 from "../../assets/ICON3.png";
import icon4 from "../../assets/ICON4.png";
import icon5 from "../../assets/ICON5.png";
import left from "../../assets/LEFT.png";
import right from "../../assets/RIGHT.png";

export default class Section4 extends Component {
  state = {
    imageState: 1
  };
  
  backArrow = () => {
    if (this.state.imageState === 1) {
      this.setState({imageState: 5})
    } else {
      this.setState({imageState: this.state.imageState - 1})
    }
  }

  frontArrow = () => {
    if (this.state.imageState === 5) {
      this.setState({imageState: 1})
    } else {
      this.setState({imageState: this.state.imageState + 1})
    }
  }

  render() {
    return (
      <div className="section4-container">
        <h2>Moodit is made just for you!</h2>
        <div className="mode-block">
          {/* <div className = "arrow"><i className="fa fa-caret-left"></i></div> */}
          <img onClick = {this.backArrow} className="arrow-img" src={left} alt="left" />
          <img className={this.state.imageState === 1 ? "info-image": "invisible"} src={icon1} alt="icon1" />
          <img className={this.state.imageState === 2 ? "info-image": "invisible"} src={icon2} alt="icon2" />
          <img className={this.state.imageState === 3 ? "info-image": "invisible"} src={icon3} alt="icon3" />
          <img className={this.state.imageState === 4 ? "info-image": "invisible"} src={icon4} alt="icon4" />
          <img className={this.state.imageState === 5 ? "info-image": "invisible"} src={icon5} alt="icon5" />
          <img onClick = {this.frontArrow} className="arrow-img" src={right} alt="right" />
          {/* <div className = "arrow"><i class="fa fa-caret-right"></i></div> */}
        </div>
        <div className={this.state.imageState === 1 ? "info-text": "invisible"}>
          <h2>Safety Mode</h2>
          <p>
            Moodit incorporates a safety mode for when things get really
            difficult. Safety mode has breathing exercises as well as an
            emergency contact feature that sends alerts and locations to the
            emergency contacts.
          </p>
        </div>
        <div className={this.state.imageState === 2 ? "info-text": "invisible"}>
          <h2>Alias</h2>
          <p>
            Sometimes sharing some emotions can be difficult. That’s why we
            allow users to create an alias and receive the community support
            without being identifiable.
          </p>
        </div>

        <div className={this.state.imageState === 3 ? "info-text": "invisible"}>
          <h2>Chat</h2>
          <p>To promote connectivity, Moodit has an inbuilt chat facility.</p>
        </div>

        <div className={this.state.imageState === 4 ? "info-text": "invisible"}>
          <h2>Empathy interactions</h2>
          <p>
            Posts can be liked and receive comments but Moodit also allows a
            more empathetic “Me Too” button to be pressed when an emotion really
            resonates with other users.
          </p>
        </div>

        <div className={this.state.imageState === 5 ? "info-text": "invisible"}>
          <h2>Moodstats</h2>
          <p>
            Share a mood or hack every day to maintain streaks and gain
            moodiwards when moods are shared or moodhacks help other users.
          </p>
        </div>
      </div>
    );
  }
}
