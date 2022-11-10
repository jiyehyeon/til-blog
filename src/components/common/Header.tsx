import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { Link, graphql } from "gatsby";

const HeaderWrapper = styled.header`
  /* Box & Display */
  width: 100%;
  padding: 25px 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;

  /* Color */
  background-color: #fff;

  /* Border */
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div``;

const Navigation = styled.div`
  font-size: 15px;
`;

const NavigationItem = styled(Link)<{ active: boolean }>`
  color: ${({ active }) => (active ? "#000" : "rgba(0, 0, 0, 0.5)")};
  font-weight: ${({ active }) => (active ? "800" : "400")};
  margin: 0 20px;
`;

const MENUITEMS: { [key: string]: string } = {
  blog: "블로그",
  projects: "포트폴리오",
  book: "📚",
  intro: "🧏🏻‍♂️",
};

type CategoryItemProps = {
  active: boolean;
};

type HeaderProps = {
  path: string;
};

const Header: FunctionComponent<HeaderProps> = function ({ path }) {
  console.log(path);

  return (
    <HeaderWrapper>
      <Logo>이름을 아직 못정한 블로그</Logo>
      <Navigation>
        {Object.entries(MENUITEMS).map(([id, title]) => (
          <NavigationItem key={id} to={`/${id}`} active={path.includes(id)}>
            {title}
          </NavigationItem>
        ))}
      </Navigation>
    </HeaderWrapper>
  );
};

export default Header;

export const query = graphql`
  {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
