import * as React from "react";
import styled, { injectGlobal } from "styled-components";
import reset from "styled-reset";

const baseStyles = () => injectGlobal`
  ${reset}
  html {
    height: 100vh
    width: 100vw
  }
`;

export default props => {
  baseStyles();
  return <Container>{props.children}</Container>;
};

const Container = styled.div`
  background-color: #f8f7ff;
  background-attachment: fixed;
  min-height: 100vh;
`;
