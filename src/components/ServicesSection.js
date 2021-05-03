import React from "react";
//import Icons
import { faMusic } from "@fortawesome/free-solid-svg-icons";
//Styles
import styled from "styled-components";
import { About, Description, Image } from "../styles";

import sushi2 from "../img/sushi2.jpg";

const ServicesSection = () => {
  return (
    <Services>
      <Description>
        <Cards>
          <Card>
            <div className="icon">
              <img alt="1" src={faMusic} />
              <h3>Nigiri</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="alt" src={faMusic} />
              <h3>Nigiri</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="2" src={faMusic} />
              <h3>Nigiri</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="demo" src={faMusic} />
              <h3>Nigiri</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
        <Image>
          <img src={sushi2} alt="sushi2"></img>
        </Image>
      </Description>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
