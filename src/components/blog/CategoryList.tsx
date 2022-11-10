import React, { FunctionComponent } from "react";

import styled from "@emotion/styled";

const CategoryListWrapper = styled.div`
  width: 190px;
  float: left;
`;

const CategoryItem = styled.div``;

export type CategoryListProps = {
  selected: number;
  categoryList: {
    id: number;
    name: string;
  }[];
};

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selected,
  categoryList,
}) {
  return (
    <CategoryListWrapper>
      {categoryList.map(({ id, name }) => {
        return <CategoryItem>{name}</CategoryItem>;
      })}
    </CategoryListWrapper>
  );
};
