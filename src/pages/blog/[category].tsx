import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import { graphql } from "gatsby";
import Layout from "../../components/common/Layout";
import CategoryList from "../../components/blog/CategoryList";
import PostList from "../../components/blog/PostList";
import styled from "@emotion/styled";

type BlogPageProps = {
  data: {
    allMarkdownRemark: any;
  };
  location: any;
  params: any;
};

const PageWrapper = styled.div`
  display: flex;
  width: 1020px;
  padding-top: 20px;
`;

const BlogPage = ({ data, location, params }: BlogPageProps) => {
  const allPosts = data.allMarkdownRemark.edges;

  const posts = allPosts.filter(
    (post: any) =>
      post.node.frontmatter.category.toLowerCase() == params.category
  );
  const categories = ["All", "CS", "React", "Javascript", "Python", "etc"];

  const isVaildPath = categories.some(
    (elem) => elem.toLowerCase() == params.category
  );

  useEffect(() => {
    if (!isVaildPath) navigate("/404");
  }, []);

  return (
    <Layout path={location.pathname}>
      <PageWrapper>
        <CategoryList selected={params.category} categoryList={categories} />
        {params.category == "all" ? (
          <PostList posts={allPosts} />
        ) : (
          <PostList posts={posts} />
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
