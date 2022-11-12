import React, { FunctionComponent } from "react";
import PostListItem from "./PostListItem";
import styled from "@emotion/styled";

export type PostProps = {
  posts: object[];
};

const PostListWrapper = styled.div`
  @media (max-width: 1170px) {
    width: 100%;
    padding: 0 75px;
  }

  @media (max-width: 1020px) {
    display: inline-block;
    padding: 0 45px;
  }
`;

const PostList: FunctionComponent<PostProps> = function ({ posts }) {
  return (
    <PostListWrapper>
      {posts.map((post) => (
        <PostList contents={post} />
      ))}
    </PostListWrapper>
  );
};

export default PostList;
