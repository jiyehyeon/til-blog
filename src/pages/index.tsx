import React from "react";
import type { HeadFC } from "gatsby";
import type { PageProps } from "gatsby";
import { graphql } from "gatsby";
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
    padding: 0 75px;
  }

  @media (max-width: 1020px) {
    padding: 0 45px;
  }
`;

const Heading = styled.h1`
  display: inline-block;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 15px;
  width: 100%;
`;

const IndexPage = function ({ location }: any) {
  return (
    <Layout path={window.location.pathname}>
      <PageWrapper>
        <SectionStyled>
          <Heading>최신글</Heading>
          <PostCardList posts={[{}]} />
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
