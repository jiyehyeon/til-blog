import React, { FunctionComponent } from "react";
import PostCard from "./PostCard";
import styled from "@emotion/styled";

export type PostProps = {
  posts: object[];
};

const PostListWrapper = styled.div`
  width: 100%;
`;

const PostCardList: FunctionComponent<PostProps> = function ({ posts }) {
  return (
    <PostListWrapper>
      {posts.map((post, idx) => (
        <div>
          {idx > 0 && <hr />}
          <PostCard key={idx} contents={post} />
        </div>
      ))}
    </PostListWrapper>
  );
};

export default PostCardList;
