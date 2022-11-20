import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { Link, graphql } from "gatsby";

const HeaderWrapper = styled.header`
  /* Box & Display */
  width: 100%;
  padding: 25px 75px;
  display: flex;
  justify-content: center;

  @media (max-width: 1020px) {
    padding: 25px 45px;
  }

  /* Color */
  background-color: rgba(0, 0, 0, 0.01);
`;

const InnerWrapper = styled.div`
  width: 1020px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-weight: 800;
`;

const Navigation = styled.div`
  font-size: 15px;
`;

const NavigationItem = styled(Link)<{ active: boolean }>`
  color: ${({ active }) => (active ? "var(--base-color)" : "var(--base-dark)")};
  font-weight: ${({ active }) => (active ? "800" : "400")};
  margin: 0 20px;
  &:hover {
    color: var(--base-color);
  }
`;

const NavigationLinkItem = styled.a`
  color: var(--base-dark);

  &:hover {
    color: var(--base-color);
  }
`;

const MENUITEMS: { [key: string]: string } = {
  "blog/all": "TODAY I LEARNED",
  projects: "PROJECTS",
  about: "ABOUT",
  // book: "📚",
  // intro: "🧏🏻‍♂️",
};

type HeaderProps = {
  path: string;
};

const Header: FunctionComponent<HeaderProps> = function ({ path }) {
  console.log(path);

  return (
    <HeaderWrapper>
      <InnerWrapper>
        <Link to={"/"}>
          <Logo>JIYE HYEON ⓒ</Logo>
        </Link>
        <Navigation>
          {Object.entries(MENUITEMS).map(([id, title]) => (
            <NavigationItem key={id} to={`/${id}`} active={path.includes(id)}>
              {title}
            </NavigationItem>
          ))}
        </Navigation>
        <NavigationLinkItem href="https://github.com/jiyehyeon" target="_blank">
          Github
        </NavigationLinkItem>
      </InnerWrapper>
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
