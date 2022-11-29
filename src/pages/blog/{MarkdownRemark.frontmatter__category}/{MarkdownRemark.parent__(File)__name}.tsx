import * as React from "react";
import { graphql, Link } from "gatsby";
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
  }
`;

const Date = styled.p`
  color: var(--base-grey);
  font-weight: 300;
`;

const ContentSection = styled.section`
  & h2 {
    font-size: 24px;
    margin-top: 20px;
  }
  line-height: 1.8;
  font-size: 16px;

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

const Line = styled.div`
  height: 1px;
  margin: 30px 0 15px 0;
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const BlogPost = ({ data }: BlogPostProps) => {
  const post = data.markdownRemark.frontmatter;
  const category = data.markdownRemark.fileAbsolutePath.split("/").slice(-2)[0];
  console.log(category);
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
          <Line />
          <ContentSection
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          ></ContentSection>
          <Line />
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
