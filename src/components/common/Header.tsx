import React, { FunctionComponent } from "react";
import { useMediaQuery } from "react-responsive";
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
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.03);
`;

const InnerWrapper = styled.div`
  width: 1020px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-weight: 800;
  font-size: 16px;
  color: var(--base-dark);
`;

const Navigation = styled.div`
  font-size: 16px;
`;

const NavigationItem = styled(Link)<{ active: boolean }>`
  margin: 0 20px;
  color: ${({ active }) => (active ? "var(--base-dark)" : "var(--base-grey)")};
  font-weight: ${({ active }) => (active ? "800" : "400")};

  transition: ease-in 0.2s;
  &:hover {
    color: var(--base-dark);
  }
`;

const NavigationLinkItem = styled.a`
  color: var(--base-grey);
  transition: ease-in 0.2s;

  &:hover {
    color: var(--base-dark);
  }
`;

const MENUITEMS: { [key: string]: string } = {
  "blog/all": "Blog",
  // projects: "PROJECTS",
  // about: "ABOUT",
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
          <Logo>JIYEHYEON</Logo>
        </Link>
        <Navigation>
          {Object.entries(MENUITEMS).map(([id, title]) => (
            <NavigationItem
              key={id}
              to={`/${id}`}
              active={
                path.includes(id) || (title == "Blog" && path.includes("blog"))
              }
            >
              {title}
            </NavigationItem>
          ))}
          <NavigationLinkItem
            href="https://github.com/jiyehyeon"
            target="_blank"
          >
            Github
          </NavigationLinkItem>
        </Navigation>
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
