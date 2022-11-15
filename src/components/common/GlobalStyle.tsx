import React from "react";
import { Global, css } from "@emotion/react";
import "prismjs/themes/prism-solarizedlight.css";

const defaultStyle = css`
  :root {
    --base-color: #0061ff;
    --base-grey: #90949a;
    --base-dark-blue: #333e4c;
    --base-dark: #2f2f37;
    --pastel-background: #fdfaf6;
  }

  @font-face {
    font-family: "LINESeedKR";
    src: url("../../assets/fonts/EOT/LINESeedKR-Th.eot")
        format("embedded-opentype"),
      url("../../assets/fonts/WOFF/LINESeedKR-Th.woff") format("woff"),
      url("../../assets/fonts/WOFF2/LINESeedKR-Th.woff2") format("woff2");
    font-style: normal;
    font-weight: 100;
  }

  @font-face {
    font-family: "LINESeedKR";
    src: url("../../assets/fonts/EOT/LINESeedKR-Rg.eot")
        format("embedded-opentype"),
      url("../../assets/fonts/WOFF/LINESeedKR-Rg.woff") format("woff"),
      url("../../assets/fonts/WOFF2/LINESeedKR-Rg.woff2") format("woff2");
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: "LINESeedKR";
    src: url("../../assets/fonts/EOT/LINESeedKR-Bd.eot")
        format("embedded-opentype"),
      url("../../assets/fonts/WOFF/LINESeedKR-Bd.woff") format("woff"),
      url("../../assets/fonts/WOFF2/LINESeedKR-Bd.woff2") format("woff2");
    font-style: normal;
    font-weight: 700;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Apple SD Gothic Neo", "LINESeedKR", Verdana, Arial, sans-serif;
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

  .gatsby-highlight {
    border-radius: 0.5em;
    margin: 0.5em 0;
    font-size: 0.9em;
    padding: 1em;
    overflow: auto;
  }

  code[class*="language-"],
  pre[class*="language-"] {
    border-radius: 0.5em;
    background-color: var(--pastel-background);
  }
`;

const GlobalStyle = function () {
  return <Global styles={defaultStyle} />;
};

export default GlobalStyle;
