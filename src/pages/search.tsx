import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/common/Layout";
import PostList from "../components/blog/PostList";
import styled from "@emotion/styled";

type BlogPageProps = {
  data: {
    allMarkdownRemark: any;
  };
  location: any;
  params: any;
};

const Heading = styled.h1`
  display: flex;
  justify-content: start;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 15px;
  width: 100%;
`;

const Keyword = styled.p`
  color: var(--base-color);
`;

const PageWrapper = styled.div`
  width: 1020px;
  padding-top: 20px;
`;

const BlogPage = ({ data, location }: BlogPageProps) => {
  const allPosts = data.allMarkdownRemark.edges;

  const params = new URLSearchParams(location.search);
  const tag = params.get("tag");
  const q = params.get("q");

  let posts: object[] = [];

  if (tag) {
    posts = allPosts.filter(
      (post: any) =>
        post.node.frontmatter.tags.some(
          (item: string) =>
            item.replace(" ", "").toLowerCase() == tag.toLowerCase()
        ) || post.node.frontmatter.tags.includes(tag)
    );
  }

  if (q) {
    console.log(allPosts[0].node);
    posts = allPosts.filter(
      (post: any) =>
        post.node.excerpt.includes(q) ||
        post.node.frontmatter.title.includes(q) ||
        post.node.frontmatter.tags.toString().includes(q)
    );
  }

  return (
    <Layout path={location.pathname}>
      <PageWrapper>
        <Heading>
          <Keyword>
            {tag && `#${tag}`}
            {q && q}
          </Keyword>
          {q && "에 대한 검색결과"}
        </Heading>
        {posts.length > 0 ? (
          <PostList posts={posts} />
        ) : (
          <p>일치하는 게시물이 없습니다.</p>
        )}
      </PageWrapper>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          parent {
            ... on File {
              dir
            }
          }
          fileAbsolutePath
          excerpt
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
            category
            tags
          }
        }
      }
    }
  }
`;

export default BlogPage;
