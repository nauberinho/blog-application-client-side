import React from "react";
import { PostQuery } from "../../../generated/graphql";
import styled from "styled-components";
import _ from "lodash";

const Container = styled.div`
  padding: 2rem;
`;

const Title = styled.div`
  padding: 1rem 0 0 0;
  border-radius: 5px;
  font-weight: 700;
`;

const Info = styled.div`
  color: gray;
  font-size: 0.8rem;
`;

const Body = styled.div`
  padding: 2rem 0;
  border: 0.5px solid lightgray;
`;

interface Props {
  data: PostQuery;
}

const Post: React.FC<Props> = ({ data }) => {
  const { post } = data;
  console.log(data);
  if (!post) {
    return <div>No post is available</div>;
  }

  return (
    <Container>
      <Title>{post.title}</Title>
      <Info>Created at 11th of October 2019</Info>
      <Body>{post.body}</Body>
    </Container>
  );
};

export default Post;
