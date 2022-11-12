import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/common/Layout";

type BlogPostProps = {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        date: string;
        tags: string[];
      };
      html: string;
    };
  };
};

const BlogPost = ({ data }: BlogPostProps) => {
  const post = data.markdownRemark.frontmatter;

  return (
    <Layout path="/blog">
      <main>
        <h1>{post.title}</h1>
        <em>{post.date}</em>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </main>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MM-DD-YYYY")
        tags
      }
      html
    }
  }
`;
