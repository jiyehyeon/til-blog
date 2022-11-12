import React from "react";

import styled from "@emotion/styled";

const CategoryListWrapper = styled.div`
  width: 190px;
  float: left;
`;

const CategoryItem = styled.div<{ selected: boolean }>`
  color: ${({ selected }) => (selected ? "#175bfc" : "#000")};
  font-weight: ${({ selected }) => (selected ? "700" : "400")};
  pointer: cursor;
`;

export type CategoryListProps = {
  selected: string;
  setSelected: any;
  categoryList: string[];
};

const CategoryList = function ({
  selected,
  setSelected,
  categoryList,
}: CategoryListProps) {
  return (
    <CategoryListWrapper>
      {categoryList.map((category) => {
        return (
          <CategoryItem
            key={category}
            selected={selected == category}
            onClick={() => setSelected(category)}
          >
            {category}
          </CategoryItem>
        );
      })}
    </CategoryListWrapper>
  );
};

export default CategoryList;
