import * as React from "react";
import Layout from "../components/common/Layout";

const BlogPage = () => {
  return (
    <Layout path={window.location.pathname}>
      <title>Blog</title>
    </Layout>
  );
};

export default BlogPage;
