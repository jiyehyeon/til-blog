import React from "react";
import type { HeadFC } from "gatsby";
import type { PageProps } from "gatsby";
import { graphql } from "gatsby";
import Layout from "../components/common/Layout";

const IndexPage = function () {
  return <>Home</>;
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
  <Layout path={window.location.pathname}>
    <title>{data.site.siteMetadata.title}</title>
  </Layout>
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
