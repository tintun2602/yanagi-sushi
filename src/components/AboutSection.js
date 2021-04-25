import React from "react";
import sushi1 from "../img/sushi1.jpg";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>Yanagi Sushi</h2>
          </div>
          <div className="hide">
            <h2>
              Velkommen<span> til</span> oss
            </h2>
          </div>
        </div>
        <p>Vi lager Tønsbergs beste take-away sushi til gode priser</p>
        <button>Kontakt oss</button>
      </div>
      <div className="image">
        <img src={sushi1} alt="sushi" />
      </div>
    </div>
  );
};

export default AboutSection;
