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
        <h2>Sashimi</h2>
        <div className="line"></div>
        <Link to="/meny/sushi1">
          <img src={sushi1} alt="sushi1"></img>
        </Link>
      </MenuItem>
      <MenuItem>
        <h2>Maki (8 Biter)</h2>
        <div className="line"></div>
        <Link to="/meny/sushi2">
          <img src={sushi2} alt="sushi2"></img>
        </Link>
      </MenuItem>
      <MenuItem>
        <h2>Futo Maki: 6 / 12 Biter</h2>
        <div className="line"></div>
        <Link to="/meny/sushi3">
          <img src={sushi3} alt="sushi3"></img>
        </Link>
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
    color: black;
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
