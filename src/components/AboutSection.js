import React from "react";
import sushi1 from "../img/sushi1.jpg";
//Styled
import styled from "styled-components";

import { About, Description, Image, Hide } from "../styles";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>Velkommen</h2>
          </Hide>
          <Hide>
            <h2>
              til <span>Yanagi Sushi</span>
            </h2>
          </Hide>
        </div>
        <p>Vi lager Tønsbergs beste take-away sushi til gode priser</p>
        <button>Kontakt oss</button>
      </Description>
      <Image>
        <img src={sushi1} alt="sushi" />
      </Image>
    </About>
  );
};

//Styled Components

export default AboutSection;
