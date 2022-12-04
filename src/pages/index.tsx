import React from "react";
import { HeadFC, graphql, CreateSchemaCustomizationArgs } from "gatsby";
import Layout from "../components/common/Layout";
import PostCardList from "../components/main/PostCardList";
import styled from "@emotion/styled";
import PostCardList2 from "../components/main/PostCardList2";

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SectionStyled = styled.section`
  max-width: 1020px;

  @media (max-width: 1170px) {
    width: 100%;
    padding: 0px;
  }
`;

const Heading = styled.h1`
  color: var(--base-color);
  display: inline-block;
  font-weight: 700;
  font-size: 28px;
  margin-top: 35px;
  width: 100%;
`;

const IndexPage = function ({ location, data }: any) {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout path={location.pathname}>
      <PageWrapper>
        <SectionStyled>
          <Heading>✍🏻 Latest</Heading>
          <PostCardList posts={posts} />
        </SectionStyled>
      </PageWrapper>
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

export const createSchemaCustomization = ({
  actions,
}: CreateSchemaCustomizationArgs) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      thumbnail: String
    }
  `;
  createTypes(typeDefs);
};

export const indexQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          parent {
            ... on File {
              dir
            }
          }
          fileAbsolutePath
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
            category
            tags
            thumbnail
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;
