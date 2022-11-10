import React from "react";
import type { HeadFC } from "gatsby";
import type { PageProps } from "gatsby";
import { graphql } from "gatsby";
import Layout from "../components/common/Layout";

const IndexPage = function () {
  return (
    <Layout path={window.location.pathname}>
      <title>Home</title>
    </Layout>
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
