import React, { FunctionComponent, ReactElement, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import GlobalStyle from "../../style/GlobalStyle";
import styled from "@emotion/styled";

type LayoutProps = {
  children: ReactElement;
  path: string;
};

const Contents = styled.div`
  background-color: rgba(0, 0, 0, 0.01);
  display: flex;
  justify-content: center;
  padding: 15px 0 150px 0;
  min-height: 100vh;

  @media (max-width: 1180px) {
    padding: 5px 75px 100px 75px;
  }

  @media (max-width: 1020px) {
    padding: 5px 45px 100px 45px;
  }

  @media (max-width: 800px) {
    padding: 5px 20px 100px 20px;
  }
`;

const Layout: FunctionComponent<LayoutProps> = ({ children, path }) => {
  return (
    <div style={{ position: "relative" }}>
      <GlobalStyle />
      <Header path={path} />
      <Contents>{children}</Contents>
      <Footer />
    </div>
  );
};

export default Layout;
