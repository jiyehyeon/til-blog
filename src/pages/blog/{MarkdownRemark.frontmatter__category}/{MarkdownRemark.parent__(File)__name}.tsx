import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/common/Layout";
import styled from "@emotion/styled";
import { Comments } from "../../../components/blog/Comments";

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
  width: 100%;
  display: flex;
  justify-content: center;

  & blockquote {
    margin: 10px 0px 10px 0px;
    padding: 15px 10px 15px 20px;
    border-left: 5px solid var(--base-color);
    background-color: var(--pastel-background);
    font-size: 16px;
    font-weight: 400;
    overflow-x: auto;
  }
`;

const ContentsWrapper = styled.article`
  width: 760px;
  padding-top: 30px;

  color: var(--base-dark);
  line-height: 1.6;

  @media (max-width: 760px) {
    width: 100%;
  }
`;

const TitleSection = styled.section`
  & h1 {
    font-size: 32px;
    overflow-wrap: break-word;
  }

  @media (max-width: 760px) {
    & h1 {
      font-size: 20px;
    }
  }
`;

const Space = styled.div`
  height: 30px;
`;

const Date = styled.p`
  color: var(--base-grey);
  font-weight: 300;
`;

const ContentSection = styled.section`
  padding-bottom: 15px;
  & h2 {
    font-size: 24px;
  }
  line-height: 1.8;
  font-size: 16px;
  li {
    margin-left: 1em;
  }
  aside {
    background-color: var(--pastel-background);
    border-radius: 0.5em;
    padding: 16px 12px;
    margin-bottom: 10px;
    font-weight: 600;
  }
`;

const Category = styled.h1`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 5px;
  color: var(--base-color);
`;

const BlogPost = ({ data }: BlogPostProps) => {
  const post = data.markdownRemark.frontmatter;
  const category = data.markdownRemark.fileAbsolutePath.split("/").slice(-2)[0];
  const [month, day, year] = post.date.split("-");

  return (
    <Layout path="/blog">
      <PageWrapper>
        <ContentsWrapper>
          <Category>{category}</Category>
          <TitleSection>
            <h1>{post.title}</h1>
            <Date>{`${year}년 ${month}월 ${day}일`}</Date>
          </TitleSection>
          <Space />
          <ContentSection
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          ></ContentSection>
          <hr />
          <Comments />
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
