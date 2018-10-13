import React, { Component } from "react";
import "./MusicPage.css";

class MusicPage extends Component {
  render() {
    return (
      <div>
        <div className="parallax-container">
          <div className="parallax">
            <img
              className="responsive-img"
              src={require("./images/Hilary-main-photo.jpg")}
              alt="image0"
            />
          </div>
        </div>

        <div id="about-anchor" className="section">
          <h1 className="section-header">About</h1>
          <p className="section-body">
            Hilary Kuhlmey is a Singer Songwriter who has been melting the
            hearts of those in the Austin music scene with her powerful voice.
            Her signature soulful style has been compared to world-renowned
            artists such as Adele, Amy Winehouse and Colbie Caillat. In 2014 she
            released her first single “Sing Loud” which quickly won the hearts
            of many and led to her 2015 tour and album release. Her music is now
            available on i-tunes, Pandora and Spotify. Along her professional
            singing journey she began working with music establishments in the
            Austin area, teaching voice and working with private students.
            Inspired by teaching, Hilary joined forces with a fellow music
            teacher in the summer of 2016 to facilitate and teach a Music and
            Art Summer Camp for African refugee children living in the Austin
            area. They organized a benefit show and fundraising campaign that
            raised enough money to fund the camp and send all 30 refugee
            children home with instruments. The movement grew quickly and Hilary
            and her team mate were asked to appear on Fox 7 Austin to share
            their story, now called, “Instruments for Hope.” Hilary continued
            her work with the children forming a gospel choir where she now
            fills the role of choir director.
          </p>
          <div className="divider" />
          <div className="divider" />
          <div className="teach-list">
            <h3 className="teaches" id="teach-header">
              <em>Hilary Teaches</em>
            </h3>
            <ul className="teaches">
              <li>Basics of Singing</li>
              <li>Pitch Training</li>
              <li>Breathing Technique</li>
              <li>Increase Range</li>
              <li>Vocal Strength</li>
              <li>Vibrato</li>
              <li>Vocal Runs</li>
              <li>Stage Fright Coaching</li>
              <li>Songwriting</li>
              <li>Performing Skills</li>
              <li>Music Industry Basics</li>
            </ul>
            <em className="teaches" id="teach-header">
              All ages welcome!
            </em>
          </div>
        </div>

        <div className="parallax-container">
          <div className="parallax">
            <img
              src={require("./images/Hilary-Photo-2.jpg")}
              className="header-photo"
              alt="image3"
            />
          </div>
        </div>

        <div id="video-anchor" className="section">
          <h1 className="section-header center" id="click-here">
            <a
              className="waves-effect waves-light btn-large"
              href="https://www.youtube.com/watch?v=l4KyVlEzeq4"
            >
              Click Here To watch video
            </a>
          </h1>

          <div className="center">
            <img
              src={require("./images/Hilary-Kuhlmey-Photo-5.jpg")}
              alt="hilary"
            />
          </div>
        </div>

        <div className="parallax-container">
          <div className="parallax">
            <img
              src={require("./images/Hilary-Photo-3.jpg")}
              className="header-photo"
              alt="image1"
            />
          </div>
        </div>

        <div id="prices-anchor" className="section">
          <h1 className="contact center">CONTACT HILARY FOR VOICE LESSONS:</h1>

          <h2 className="contact center" id="email">
            Hilk227@gmail.com
          </h2>

          <div className="divider" id="space" />

          <h2 className="section-header">Prices</h2>

          <div className="section-body" id="prices">
            <h5>Voice Lessons </h5>

            <p>$40 per hour lesson</p>
            <div className="divider" id="space" />
            <h5>Package deals </h5>
            <p>12 weeks (3 months) - $420</p>
            <p>24 weeks (6 months) - $720</p>
            <p>52 weeks (1 year) - $1300</p>
            <div className="divider" id="space" />

            <em>
              For package deals you have the option to pay monthly or full cost
              up front. The monthly payments are required to be paid during the
              first lesson of each month.
            </em>
          </div>
        </div>

        <div className="parallax-container">
          <div className="parallax">
            <img
              src={require("./images/Hilary-Photo-4.jpg")}
              className="header-photo"
              alt="image2"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MusicPage;
