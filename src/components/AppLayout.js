import * as React from "react";
import styled, { injectGlobal } from "styled-components";
import reset from "styled-reset";
import Footer from "./Footer";
import NavBar from "./NavBar";

const baseStyles = () => injectGlobal`
  ${reset}
  html {
    height: 100vh
    width: 100vw
  }
`;

export default ({ children }) => {
  baseStyles();
  return (
    <MainContainer>
      <NavBar />
      <Container>{children}</Container>
      <Footer />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  display: flex;
  background-color: #f8f7ff;
  background-attachment: fixed;
`;
