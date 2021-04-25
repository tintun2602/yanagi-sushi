import React from "react";
//import Icons
import { faMusic } from "@fortawesome/free-solid-svg-icons";

import sushi2 from "../img/sushi2.jpg";

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img alt="1" src={faMusic} />
              <h3>Nigiri</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img alt="alt" src={faMusic} />
              <h3>Nigiri</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img alt="2" src={faMusic} />
              <h3>Nigiri</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img alt="demo" src={faMusic} />
              <h3>Nigiri</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="images">
          <img src={sushi2} alt="sushi2"></img>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
