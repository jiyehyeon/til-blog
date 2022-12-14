import React from "react";

import styled from "@emotion/styled";
import { Link } from "gatsby";

const CategoryListWrapper = styled.div`
  @media (max-width: 600px) {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    overflow-x: auto;
    margin-bottom: 15px;
  }

  @media (min-width: 600px) {
    width: 190px;
    float: left;
    margin-top: 6px;
  }
`;

const CategoryItem = styled.div<{ selected: boolean }>`
  color: var(--base-dark);
  font-weight: ${({ selected }) => (selected ? "800" : "400")};
  font-size: 16px;
  margin-bottom: 16px;
  transition: ease-in 0.1s;

  &:hover {
    opacity: 0.6;
  }
`;

export type CategoryListProps = {
  selected: string;
  categoryList: string[];
};

const CategoryList = function ({ selected, categoryList }: CategoryListProps) {
  return (
    <CategoryListWrapper>
      {categoryList.map((category) => {
        return (
          <Link to={`/blog/${category.toLowerCase()}`}>
            <CategoryItem
              key={category}
              selected={selected == category.toLowerCase()}
            >
              {category}
            </CategoryItem>
          </Link>
        );
      })}
    </CategoryListWrapper>
  );
};

export default CategoryList;
