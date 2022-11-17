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

  @media (max-width: 1020px) {
    padding: 25px 45px;
  }

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
  color: ${({ active }) => (active ? "var(--base-dark)" : "var(--base-grey)")};
  font-weight: ${({ active }) => (active ? "800" : "400")};
  margin: 0 20px;
`;

const NavigationImageItem = styled.button`
  background-color: var(--base-grey);
  border: none;
  padding: 5px 5px 3px 5px;
  border-radius: 0.5em;
`;

const MENUITEMS: { [key: string]: string } = {
  "blog/all": "📚 TIL",
  // projects: "포트폴리오",
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
      <Link to={"/"}>
        <Logo>이름을 아직 못정한 블로그</Logo>
      </Link>
      <Navigation>
        {Object.entries(MENUITEMS).map(([id, title]) => (
          <NavigationItem key={id} to={`/${id}`} active={path.includes(id)}>
            {title}
          </NavigationItem>
        ))}
        <a href="https://github.com/jiyehyeon" target="_blank">
          <NavigationImageItem>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#fff"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </NavigationImageItem>
        </a>
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
