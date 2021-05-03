import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Images
import sushi1 from "../img/sushi1.jpg";
import sushi2 from "../img/sushi2.jpg";
import sushi3 from "../img/sushi3.jpg";

const Menu = () => {
  return (
    <StyledMenu>
      <MenuItem>
        <h2>Nigiri</h2>
        <div className="line"></div>
        <Link src={sushi1} alt="sushi1"></Link>
      </MenuItem>
      <MenuItem>
        <h2>Tempura</h2>
        <div className="line"></div>
        <Link src={sushi2} alt="sushi2"></Link>
      </MenuItem>
      <MenuItem>
        <h2>Sashimi</h2>
        <div className="line"></div>
        <Link src={sushi3} alt="sushi3"></Link>
      </MenuItem>
    </StyledMenu>
  );
};

const StyledMenu = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0rem;
  }
`;

const MenuItem = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default Menu;
