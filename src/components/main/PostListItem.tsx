import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";

export type PostProps = {
  contents: object;
};

const ItemWrapper = styled.div`
  width: 100%;
`;

const ImgBox = styled.img``;

const TextBox = styled.div``;

const Title = styled.h1`
  font-size: 19px;
  color: #000;
  margin: 12px 0;
  font-weight: 700;
  line-height: 1.6;
`;

const Date = styled.div``;

const TagList = styled.div``;

const TagItem = styled.a`
  font-size: 14px;
  margin-right: 15px;
  color: rgb(0, 198, 142);
`;

const PostListItem: FunctionComponent<PostProps> = function ({ contents }) {
  return (
    <ItemWrapper>
      <ImgBox src="https://res.cloudinary.com/practicaldev/image/fetch/s--rHVl9ZcJ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/nvbddz2dlz8t3v0qcutg.PNG" />
      <TextBox>
        <Title>Title</Title>
        <TagList>
          <TagItem>#Item1</TagItem>
          <TagItem>#Item2</TagItem>
          <TagItem>#Item3</TagItem>
          <TagItem>#Item4</TagItem>
        </TagList>
        <Date>YYYY년 MM월 DD일</Date>
      </TextBox>
    </ItemWrapper>
  );
};

export default PostListItem;
