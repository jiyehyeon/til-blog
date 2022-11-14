import React from "react";

import styled from "@emotion/styled";
import { Link } from "gatsby";

const CategoryListWrapper = styled.div`
  width: 190px;
  float: left;
  margin-top: 6px;
`;

const CategoryItem = styled.div<{ selected: boolean }>`
  color: ${({ selected }) => (selected ? "#175bfc" : "#000")};
  font-weight: ${({ selected }) => (selected ? "700" : "400")};
  font-size: 16px;
  margin-bottom: 16px;
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
