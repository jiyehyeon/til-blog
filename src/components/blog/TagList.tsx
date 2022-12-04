import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

export type TagListProps = {
  tags: string[];
};

const TagListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 15px;
`;

const TagItem = styled.a`
  display: inline-block;
  margin-top: 5px;
  font-weight: 400;
  border-radius: 25px;
  border: 1px solid var(--base-color);
  padding: 5px 15px 3px 15px;
  font-size: 13px;
  margin-right: 5px;
  color: var(--base-color);
  transition: ease-in 0.1s;

  &:hover {
    color: var(--base-color);
    opacity: 0.6;
  }
`;

const TagList = function ({ tags }: TagListProps) {
  return (
    <TagListWrapper>
      {tags.map((tag: string) => (
        <Link to={`/search?tag=${tag.replaceAll(" ", "")}`}>
          <TagItem key={tag}>{tag}</TagItem>
        </Link>
      ))}
    </TagListWrapper>
  );
};

export default TagList;
