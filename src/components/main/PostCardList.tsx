import React, { FunctionComponent } from "react";
import PostCard from "./PostCard";
import styled from "@emotion/styled";

export type PostProps = {
  posts: object[];
};
const Line = styled.hr`
  width: 100%;
  border: none;
  border: 0.3px solid var(--base-dark);
  margin-top: 20px;
`;

const PostListWrapper = styled.div`
  width: 100%;
`;

const PostCardList: FunctionComponent<PostProps> = function ({ posts }) {
  return (
    <PostListWrapper>
      {posts.map((post, idx) => (
        <div>
          <Line />
          <PostCard key={idx} contents={post} />
        </div>
      ))}
    </PostListWrapper>
  );
};

export default PostCardList;
