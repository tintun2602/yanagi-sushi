import React from "react";
import styled from "styled-components";
import logo from "../img/yanagi.jpg";

const Nav = () => {
  return (
    <StyledNav>
      <img href="#" alt="store-logo" src={logo}></img>
      <ul>
        <li>
          <a href="#">Hjem</a>
        </li>
        <li>
          <a href="#">Meny</a>
        </li>
        <li>
          <a href="#">Kontakt Oss</a>
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
  background-color: #282828;
  a {
    color: white;
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
