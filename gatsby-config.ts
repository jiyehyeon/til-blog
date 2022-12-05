import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `DevLog`,
    description: `오늘 공부한 내용을 기록합니다.`,
    siteUrl: `https://jiyehyeon.netlify.app/`,
    author: `@jiyehyeon`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blogs",
        path: "./src/posts",
        ignore: [`.md`],
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [`gatsby-remark-prismjs`],
        options: {
          classPrefix: "language-",
          inlineCodeMarker: null,
          aliases: {},
          showLineNumbers: true,
          noInlineHighlight: false,
        },
      },
    },
  ],
};

export default config;
