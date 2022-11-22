import React from "react";
import { Global, css } from "@emotion/react";
import "prismjs/themes/prism.css";

const defaultStyle = css`
  :root {
    --base-color: rgb(0, 198, 142);
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

  blockquote {
    margin: 30px 0px 20px 0px;
    padding: 15px 10px 15px 20px;
    border-left: 5px solid var(--base-color);
    background-color: var(--pastel-background);
    font-size: 16px;
    font-weight: 400;
    overflow-x: auto;
  }
`;

const GlobalStyle = function () {
  return <Global styles={defaultStyle} />;
};

export default GlobalStyle;
