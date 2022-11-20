import React from "react";
import { HeadFC, navigate, graphql } from "gatsby";
import Layout from "../components/common/Layout";
import PostCardList from "../components/main/PostCardList";
import styled from "@emotion/styled";

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SectionStyled = styled.section`
  width: 1020px;

  @media (max-width: 1170px) {
    width: 100%;
    padding: 0px;
  }

  @media (max-width: 1020px) {
    padding: 0px;
  }

  @media (max-width: 600px) {
    width: 100vw;
    padding: 0 45px;
  }
`;

const Heading = styled.h1`
  color: var(--base-dark);
  display: inline-block;
  font-weight: 700;
  font-size: 32px;
  margin-top: 20px;
  width: 100%;
`;

const IndexPage = function ({ location, data }: any) {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout path={location.pathname}>
      <PageWrapper>
        <SectionStyled>
          <Heading>
            LATEST<br></br>POSTS
          </Heading>
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
