import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

type PostProps = {
  contents: any;
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

const Date = styled.div`
  font-size: 14px;
  color: rgb(41, 41, 41);
`;

const TagList = styled.div``;

const TagItem = styled.a`
  font-size: 14px;
  margin-right: 15px;
  color: #175bfc;
`;

const PostListItem: FunctionComponent<PostProps> = function ({ contents }) {
  const { title, tags, date } = contents.node.frontmatter;
  const path = contents.node.fileAbsolutePath
    .split("/")
    .pop()
    .replace(".md", "");

  return (
    <ItemWrapper>
      <TextBox>
        <Link to={`/blog/${path}`}>
          <Title>{title}</Title>
        </Link>
        <TagList>
          {tags.map((tag: string) => (
            <TagItem key={tag}>#{tag}</TagItem>
          ))}
        </TagList>
        <Date>{date}</Date>
      </TextBox>
    </ItemWrapper>
  );
};

export default PostListItem;
