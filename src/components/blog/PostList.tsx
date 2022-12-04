import React from "react";
import PostListItem from "./PostListItem";
import styled from "@emotion/styled";

export type PostProps = {
  posts: any[];
};

const PostListWrapper = styled.div`
  width: 100%;
  max-width: 780px;
`;

const Line = styled.hr`
  margin: 35px 0 25px 0;
`;

const PostList = function ({ posts }: PostProps) {
  return (
    <PostListWrapper>
      {posts.map((post, idx) => (
        <>
          <PostListItem key={post.title} contents={post} />
          {idx < posts.length - 1 && <Line />}
        </>
      ))}
    </PostListWrapper>
  );
};

export default PostList;
