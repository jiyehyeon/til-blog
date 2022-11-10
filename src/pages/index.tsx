import React from "react";
import type { HeadFC } from "gatsby";
import type { PageProps } from "gatsby";
import { graphql } from "gatsby";

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
