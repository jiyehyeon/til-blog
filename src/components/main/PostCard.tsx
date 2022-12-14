import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import TagList from "../blog/TagList";

export type PostProps = {
  contents: any;
};

const PostCardWrapper = styled.div`
  padding: 20px 0;
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
  margin-right: 15px;
  border-radius: 10px;

  @media (max-width: 600px) {
    margin-bottom: 15px;
    width: 100%;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 15px;
  padding: 10px 0;

  @media (max-width: 600px) {
    margin: 10px 0;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  color: var(--base-dark);
  font-weight: 700;
`;

const Date = styled.div`
  font-size: 15px;
  color: var(--base-grey);
  font-weight: 500;
  margin-top: 16px;
`;

const TopWrapper = styled.div``;

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
      <ImgBox
        src={
          contents.node.frontmatter.thumbnail ||
          "https://res.cloudinary.com/practicaldev/image/fetch/s--rHVl9ZcJ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/nvbddz2dlz8t3v0qcutg.PNG"
        }
        alt={title}
      />
      {/* </Link> */}
      <TextBox>
        <TopWrapper>
          <Link to={`/blog/${category}/${pathname}`}>
            <Title>{title}</Title>
          </Link>
          <TagList tags={tags} />
        </TopWrapper>
        <Date>{date}</Date>
      </TextBox>
    </PostCardWrapper>
  );
};

export default PostCard;
