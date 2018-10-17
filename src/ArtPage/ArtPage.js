import React, { Component } from "react";
import "./ArtPage.css";

class ArtPage extends Component {
  render() {
    return (
      <div className="ArtPage">
        <h1>ArtWork</h1>
        <ImageFrame src={require("../images/Angels.jpg")} alt="gallery-0" />
        <ImageFrame
          src={require("../images/Art teacher paint.jpg")}
          alt="gallery-1"
        />
        <ImageFrame
          src={require("../images/art teacher.jpg")}
          alt="gallery-2"
        />
        <ImageFrame
          src={require("../images/Born To Sing.jpg")}
          alt="gallery-3"
        />
        <ImageFrame src={require("../images/Camp1.jpg")} alt="gallery-4" />
        <ImageFrame
          src={require("../images/Hilary-rest.JPG")}
          alt="gallery-5"
        />
        <ImageFrame
          src={require("../images/Hilary-transformation.jpg")}
          alt="gallery-6"
        />
        <ImageFrame
          src={require("../images/Hilary-uprooted.JPG")}
          alt="gallery-7"
        />
        <ImageFrame src={require("../images/IMG_2929.JPG")} alt="gallery-8" />
        <ImageFrame src={require("../images/IMG_2930.JPG")} alt="gallery-9" />
        <ImageFrame src={require("../images/IMG_2931.JPG")} alt="gallery-10" />
        <ImageFrame src={require("../images/IMG_2933.JPG")} alt="gallery-11" />
        <ImageFrame src={require("../images/IMG_2934.JPG")} alt="gallery-12" />
      </div>
    );
  }
}

export default ArtPage;

class ImageFrame extends Component {
  render() {
    return (
      <div className="image-frame">
        <img className="image" src={this.props.src} alt={this.props.alt} />
      </div>
    );
  }
}
