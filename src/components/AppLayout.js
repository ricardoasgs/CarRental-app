import * as React from "react";
import { injectGlobal } from "styled-components";
import reset from "styled-reset";

const baseStyles = () => injectGlobal`
  ${reset}
  html {
    height: 100vh
    width: 100vw
  }
`;

export default ({ children }) => {
  baseStyles();
  return <div>{children}</div>;
};
