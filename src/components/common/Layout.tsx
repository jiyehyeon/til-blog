import React, { FunctionComponent, ReactElement, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import GlobalStyle from "./GlobalStyle";
import styled from "@emotion/styled";

type LayoutProps = {
  children: ReactElement;
  path: string;
};

const Contents = styled.div`
  padding: 100px 0;
  min-height: 100vh;
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
