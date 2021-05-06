import React from "react";
import styled from "styled-components";
import logo from "../img/yanagi.jpg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <img alt="store-logo" src={logo}></img>
      <ul>
        <li>
          <Link to="/">HJEM</Link>
        </li>
        <li>
          <Link to="/meny">MENY</Link>
        </li>
        <li>
          <Link to="/kontakt">KONTAKT OSS</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #ffffff;
  a {
    color: black;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  img {
    height: 5rem;
  }
  li {
    padding: 0rem 5rem;
    position: relative;
  }
`;

export default Nav;
