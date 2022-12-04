import React from "react";
import { Global, css } from "@emotion/react";
import "prismjs/themes/prism.css";

const defaultStyle = css`
  :root {
    --base-color: rgb(0, 198, 142);
    --base-grey: #8898aa;
    --base-dark-blue: #333e4c;
    --base-dark: #333e4c;
    --pastel-background: rgba(150, 198, 142, 0.05);
  }

  @font-face {
    font-family: "LINESeedKR";
    src: url("/fonts/EOT/LINESeedKR-Th.eot") format("embedded-opentype"),
      url("/fonts/WOFF/LINESeedKR-Th.woff") format("woff"),
      url("/fonts/WOFF2/LINESeedKR-Th.woff2") format("woff2");
    font-style: normal;
    font-weight: 100;
  }

  @font-face {
    font-family: "LINESeedKR";
    src: url("/fonts/EOT/LINESeedKR-Rg.eot") format("embedded-opentype"),
      url("/fonts/WOFF/LINESeedKR-Rg.woff") format("woff"),
      url("/fonts/WOFF2/LINESeedKR-Rg.woff2") format("woff2");
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: "LINESeedKR";
    src: url("/fonts/EOT/LINESeedKR-Bd.eot") format("embedded-opentype"),
      url("/fonts/WOFF/LINESeedKR-Bd.woff") format("woff"),
      url("/fonts/WOFF2/LINESeedKR-Bd.woff2") format("woff2");
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

  ::selection {
    background: var(--base-color);
    color: #fff;
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  .gatsby-highlight {
    max-width: 1020px;
    border-radius: 0.5em;
    margin: 0.5em 0;
    font-size: 0.9em;
    overflow: auto;
  }

  code[class*="language-"],
  pre[class*="language-"] {
    border-radius: 0.5em;
  }

  & hr {
    margin: 15px 0 15px 0;
    border: 0.5px solid rgba(0, 0, 0, 0.1);
    width: 100%;
  }
`;

const GlobalStyle = function () {
  return <Global styles={defaultStyle} />;
};

export default GlobalStyle;
