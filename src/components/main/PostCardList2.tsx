import React, { FunctionComponent } from "react";
import PostCard from "./PostCard";
import styled from "@emotion/styled";

export type PostProps = {
  posts: object[];
};

const PostListWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  gap: 30px;

  @media (max-width: 1020px) {
    display: inline-block;
  }
`;

const PostCardList: FunctionComponent<PostProps> = function ({ posts }) {
  return (
    <PostListWrapper>
      <PostCard contents={posts} />
      <PostCard contents={posts} />
    </PostListWrapper>
  );
};

export default PostCardList;
