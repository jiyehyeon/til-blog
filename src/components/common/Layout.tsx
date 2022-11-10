import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import GlobalStyle from "./GlobalStyle";

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
