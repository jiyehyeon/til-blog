import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/common/Layout";
import CategoryList from "../components/blog/CategoryList";
import PostList from "../components/blog/PostList";
import styled from "@emotion/styled";

type BlogPageProps = {
  data: {
    allMarkdownRemark: any;
  };
};

const PageWrapper = styled.div`
  display: flex;
`;

const BlogPage = ({ data }: BlogPageProps) => {
  const posts = data.allMarkdownRemark.edges;
  const [selectedCategory, setSelectedCategory] = useState("All");

  var categories: { [key: string]: any[] } = { All: [] };

  posts.forEach((item: any) => {
    const category = item.node.parent.dir.split("/").pop();
    try {
      categories[category].push(item);
    } catch {
      categories[category] = [];
      categories[category].push(item);
    }
  });

  console.log(categories);

  return (
    <Layout path={window.location.pathname}>
      <PageWrapper>
        <title>{selectedCategory}</title>
        <CategoryList
          selected={selectedCategory}
          setSelected={setSelectedCategory}
          categoryList={Object.keys(categories)}
        />
        {selectedCategory == "All" ? (
          <PostList posts={posts} />
        ) : (
          <PostList posts={categories[selectedCategory]} />
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
          excerpt(format: MARKDOWN)
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
            tags
          }
        }
      }
    }
  }
`;

export default BlogPage;
