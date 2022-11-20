import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

export type PostProps = {
  contents: object;
};

const PostCardWrapper = styled.div`
  width: 100%;
`;

const ImgBox = styled.img`
  width: 100%;
  height: 260px;
  border-radius: 15px;
  object-fit: cover;
`;

const TextBox = styled.div`
  padding: 0 10px;
`;

const Title = styled.h1`
  font-size: 19px;
  color: var(--base-dark);
  margin: 12px 0;
  font-weight: 700;
  line-height: 1.6;
`;

const Date = styled.div`
  font-size: 14px;
  color: var(--base-grey);
  font-weight: 400;
  margin-top: 16px;

  @media (max-width: 1020px) {
    margin-bottom: 30px;
  }
`;

const TagList = styled.div`
  display: flex;
  width: 480px;
  overflow: hidden;
  margin-bottom: 3px;
`;

const TagItem = styled.a`
  font-size: 14px;
  margin-right: 15px;
  color: var(--base-color);
`;

const PostCard: FunctionComponent<PostProps> = function ({ contents }) {
  return (
    <PostCardWrapper>
      {/* <Link to={id}> */}
      <ImgBox src="https://res.cloudinary.com/practicaldev/image/fetch/s--rHVl9ZcJ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/nvbddz2dlz8t3v0qcutg.PNG" />
      {/* </Link> */}
      <TextBox>
        {/* <Link to={id}> */}
        <Title>Title</Title>
        {/* </Link> */}
        <TagList>
          <TagItem>#Item1</TagItem>
          <TagItem>#Item2</TagItem>
          <TagItem>#Item3</TagItem>
          <TagItem>#Item4</TagItem>
        </TagList>
        <Date>YYYY년 MM월 DD일</Date>
      </TextBox>
    </PostCardWrapper>
  );
};

export default PostCard;
