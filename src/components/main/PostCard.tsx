import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

export type PostProps = {
  contents: any;
};

const PostCardWrapper = styled.div`
  margin: 15px 0 45px 0;
  width: 100%;
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const ImgBox = styled.img`
  width: 40%;
  aspect-ratio: 16/9;
  object-fit: cover;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const TextBox = styled.div`
  position: relative;
  margin-left: 10px;
  padding: 0 10px;

  @media (max-width: 600px) {
    margin: 10px 0;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  color: var(--base-dark);
  font-weight: 700;
  line-height: 1.6;
`;

const Date = styled.div`
  @media (min-width: 600px) {
    position: absolute;
    bottom: 0;
  }
  font-size: 14px;
  color: var(--base-dark);
  font-weight: 400;
  margin-top: 16px;
`;

const TagList = styled.div`
  display: flex;
  width: 480px;
  margin-top: 10px;
`;

const TagItem = styled.a`
  border-radius: 25px;
  border: 1px solid var(--base-dark);
  padding: 5px 12px;
  font-size: 14px;
  margin-right: 5px;
  color: var(--base-dark);
`;

const PostCard: FunctionComponent<PostProps> = function ({ contents }) {
  const { title, tags } = contents.node.frontmatter;
  const category = contents.node.frontmatter.category.toLowerCase();
  const date = contents.node.frontmatter.date.replaceAll("-", ". ");
  const [year, month, day] = date.split("-");
  const pathname = contents.node.fileAbsolutePath
    .split("/")
    .pop()
    .replace(".md", "");

  return (
    <PostCardWrapper>
      {/* <Link to={id}> */}
      <ImgBox src="https://res.cloudinary.com/practicaldev/image/fetch/s--rHVl9ZcJ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/nvbddz2dlz8t3v0qcutg.PNG" />
      {/* </Link> */}
      <TextBox>
        <Link to={`/blog/${category}/${pathname}`}>
          <Title>{title}</Title>
        </Link>
        <TagList>
          {tags.map((tag: string) => (
            <Link to={`/search?tag=${tag.replaceAll(" ", "")}`}>
              <TagItem key={tag}>{tag}</TagItem>
            </Link>
          ))}
        </TagList>
        <Date>{date}</Date>
      </TextBox>
    </PostCardWrapper>
  );
};

export default PostCard;
