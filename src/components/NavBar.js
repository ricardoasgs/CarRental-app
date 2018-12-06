import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = props => (
  <Nav>
    <Logo>Car Rental</Logo>
    <MainNav>
      <Link to="/home" style={{ textDecoration: "none" }}>
        <NavItem>Home</NavItem>
      </Link>
      <Link to="/rents" style={{ textDecoration: "none" }}>
        <NavItem>Meus Alugueis</NavItem>
      </Link>
    </MainNav>
  </Nav>
);

const Nav = styled.nav`
  display: flex;
  color: #9381FF
  flex-direction: row;
  background-color: #fff;
  box-shadow: rgba(31, 53, 78, 0.11) 0 1px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
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
  color: #9381ff;
  font-size: 0.99em;
  padding: 10px 15px;
  text-transform: uppercase;
  text-align: center;
`;

const NavItem = styled.li`
  margin: 0;
  font-size: 1.25em;
  padding: 10px 15px;
  text-transform: uppercase;
  text-align: center;
  display: block;
`;

export default NavBar;
