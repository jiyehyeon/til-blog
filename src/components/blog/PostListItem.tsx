import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import TagList from "./TagList";

type PostProps = {
  contents: any;
};

const ItemWrapper = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  font-size: 20px;
  color: var(--base-dark);
  font-weight: 700;
  line-height: 1.6;
`;

const Date = styled.div`
  font-size: 14px;
  margin-top: 6px;
  color: var(--base-grey);
`;

const PostListItem: FunctionComponent<PostProps> = function ({ contents }) {
  const { title, tags, date } = contents.node.frontmatter;
  const [year, month, day] = date.split("-");
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

      <Date>{`${year}. ${month}. ${day}`}</Date>
      <TagList tags={tags} />
    </ItemWrapper>
  );
};

export default PostListItem;
