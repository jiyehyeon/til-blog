import React from "react";
import PostListItem from "./PostListItem";
import styled from "@emotion/styled";

export type PostProps = {
  posts: object[];
};

const PostListWrapper = styled.div`
  width: 100%;
  max-width: 780px;
`;

const PostList = function ({ posts }: PostProps) {
  return (
    <PostListWrapper>
      {posts.map((post, idx) => (
        <PostListItem key={idx} contents={post} />
      ))}
    </PostListWrapper>
  );
};

export default PostList;
