import * as React from "react";
import type { HeadFC } from "gatsby";
import type { PageProps } from "gatsby";
import { graphql } from "gatsby";
import { Global } from "@emotion/react";
import GlobalStyle from "../components/common/GlobalStyle";
import Header from "../components/common/Header";
import HomePage from "./home";

const IndexPage = function () {
  return (
    <>
      <GlobalStyle />
      <Header />
      <HomePage />
    </>
  );
};

export default IndexPage;

type HeadProps = {
  data: {
    site: {
      siteMetadata: {
        title: string;
        author: string;
      };
    };
  };
};

export const Head: HeadFC<HeadProps> = ({ data }) => (
  <title>{data.site.siteMetadata.title}</title>
);

export const metaDataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;
