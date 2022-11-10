import React, { FunctionComponent, ReactElement, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import GlobalStyle from "./GlobalStyle";

type LayoutProps = {
  children: ReactElement;
  path: string;
};

const Layout: FunctionComponent<LayoutProps> = ({ children, path }) => {
  console.log(path);

  return (
    <div>
      <GlobalStyle />
      <Header path={path} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
