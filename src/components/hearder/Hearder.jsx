import React from "react";
import "./hearder.css";
import CTA from "./CTA";
import ME from "../../assets/cat3.png";
import HearderSocials from "./HearderSocials";

const Hearder = () => {
  return (
    <header>
      <div className="container hearder-container">
        <h5>Hello, I'm</h5>
        <h1>蕭浩廷 Lonck</h1>
        <h5 >Front-End Developer</h5>
        <CTA />
        <HearderSocials />
        <div className="me">
          <img className="me-image" src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Hearder;
