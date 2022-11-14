import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../../components/common/Layout";
import styled from "@emotion/styled";

type BlogPostProps = {
  data: {
    markdownRemark: {
      fileAbsolutePath: string;
      frontmatter: {
        title: string;
        date: string;
        tags: string[];
      };
      html: string;
    };
  };
};

const PageWrapper = styled.main`
  display: flex;
  justify-content: center;
`;

const ContentsWrapper = styled.div`
  width: 1020px;
  line-height: 1.6;
`;

const TitleSection = styled.section``;

const ContentSection = styled.section`
  line-height: 1.6;
`;

const BlogPost = ({ data }: BlogPostProps) => {
  const post = data.markdownRemark.frontmatter;
  const category = data.markdownRemark.fileAbsolutePath.split("/").slice(-2)[0];
  console.log(category);

  return (
    <Layout path="/blog">
      <PageWrapper>
        <ContentsWrapper>
          <TitleSection>
            <h1>{post.title}</h1>
            <em>{post.date}</em>
          </TitleSection>
          <ContentSection>
            <div
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
          </ContentSection>
        </ContentsWrapper>
      </PageWrapper>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      fileAbsolutePath
      frontmatter {
        title
        category
        date(formatString: "MM-DD-YYYY")
        tags
      }
      html
    }
  }
`;
