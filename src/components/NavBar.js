import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = props => (
  <Nav>
    <Logo>Car Rental</Logo>
    <MainNav>
      <Link to="/home">
        <NavItem>Home</NavItem>
      </Link>
      <Link to="/rents">
        <NavItem>Meus Alugueis</NavItem>
      </Link>
      <NavItem>Sobre</NavItem>
    </MainNav>
  </Nav>
);

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  border: 1px solid #a2a2a2;
  background-color: #f4f4f4;
  -webkit-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
  height: 7vh;
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 1.45em;
  padding: 10px 15px;
  text-transform: uppercase;
  text-align: center;
  display: block;
`;

const MainNav = styled.ul`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  list-style: none;
  color: #34495e;
  font-size: 0.99em;
  padding: 10px 15px;
  text-transform: uppercase;
  text-align: center;
`;

const NavItem = styled.li`
  margin-left: 20px;
`;

export default NavBar;
