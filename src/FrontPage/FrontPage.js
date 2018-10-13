import React, { Component } from "react";
import "./FrontPage.css";

export default class FrontPage extends Component {
  chooseSide = side => {
    console.log(side);
  };

  render() {
    return (
      <div className="front-page-container">
        <div className="logo">
          <img
            src={require("../images/kreative-mi-bkg-blk.jpg")}
            alt="km-bkg"
          />
        </div>
        <div onClick={this.chooseSide("art")} className="art">
          <h1>ART</h1>
        </div>
        <div onClick={this.chooseSide("music")} className="music">
          <h1>MUSIC</h1>
        </div>
      </div>
    );
  }
}
