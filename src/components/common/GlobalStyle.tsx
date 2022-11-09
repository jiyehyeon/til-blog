import React, { FunctionComponent } from "react";
import { Global, css } from "@emotion/react";

const defaultStyle = css`
  @font-face {
    font-family: "HallymGothic-Regular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2204@1.0/HallymGothic-Regular.woff2")
      format("woff2");
    font-weight: 400;
    font-style: normal;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "HallymGothic-Regular";
  }

  html,
  body,
  #___gatsby {
    height: 100%;
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`;

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />;
};

export default GlobalStyle;
