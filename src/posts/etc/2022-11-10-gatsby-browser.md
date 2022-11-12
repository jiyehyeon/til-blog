---
title: "gatsby 레이아웃 언마운트 되지 않게 설정하기"
date: "2022-11-10"
tags: ["gatsby", "gatsby blog"]
---

보통 gatsby를 사용해서 헤더와 푸터같은 레이아웃을 구성할 때,
Layout 컴포넌트를 만들어 매 페이지에 불러오는 형태로 사용하는 것 같다.

하지만 공식 문서를 살펴보니 페이지마다 리렌더링 하지 않고
유지할 수 있는 방법이 있는 것 같아 시도해 보았다.

최상위 폴더(src, package.json이 있는 폴더)에 gatsby-browser.tsx 파일과 gatsby-ssr.tsx 파일을 생성한 후 레이아웃 컴포넌트를 불러와주면 된다.

자바스크립트를 사용하는 경우 동일하게 gatsby-browser.jsx와 gatsby-ssr.jsx 파일을 생성해주면 된다. <a href="https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/">참고</a>

```typescript
// gatsby-browser.tsx
import React from "react";
import type { GatsbyBrowser } from "gatsby";
import Layout from "./src/components/common/Layout";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
  props,
}) => {
  return <Layout {...props}>{element}</Layout>;
};
```

```typescript
// gatsby-ssr.tsx
import React from "react";
import type { GatsbySSR } from "gatsby";
import Layout from "./src/components/common/Layout";

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({
  element,
  props,
}) => {
  return <Layout {...props}>{element}</Layout>;
};
```

적용하고 새로고침 해도 왜이렇게 안뜨나 했더니
껐다 키니깐 된다..
gatsby-browser 파일과 gatsby-ssr 파일은 서버가 시작될 때 로드되는 파일이어서 그런 것 같다.

참고 문서: https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/#gatsby-browsertsx--gatsby-ssrtsx
