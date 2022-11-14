import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

type PostProps = {
  contents: any;
};

const ItemWrapper = styled.div`
  width: 100%;
  margin-bottom: 45px;
`;

const Title = styled.h1`
  font-size: 20px;
  color: #000;
  font-weight: 700;
  line-height: 1.6;
`;

const Date = styled.div`
  font-size: 14px;
  margin: 12px 0;
  color: rgba(0, 0, 0, 0.4);
`;

const TagList = styled.div``;

const TagItem = styled.a`
  font-size: 14px;
  margin-right: 15px;
  color: #175bfc;
`;

const PostListItem: FunctionComponent<PostProps> = function ({ contents }) {
  const { title, tags, date } = contents.node.frontmatter;
  const category = contents.node.frontmatter.category.toLowerCase();
  const pathname = contents.node.fileAbsolutePath
    .split("/")
    .pop()
    .replace(".md", "");

  return (
    <ItemWrapper>
      <Link to={`/blog/${category}/${pathname}`}>
        <Title>{title}</Title>
      </Link>

      <Date>{date}</Date>
      <TagList>
        {tags.map((tag: string) => (
          <Link to={`/search?tag=${tag.replace(" ", "")}`}>
            <TagItem key={tag}>#{tag}</TagItem>
          </Link>
        ))}
      </TagList>
    </ItemWrapper>
  );
};

export default PostListItem;
