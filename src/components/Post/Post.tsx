import React from "react";
import { PostQuery } from "../../generated/graphql";
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
  padding-top: 2rem;
  border: 1px solid lightgray;
`;

const Body = styled.div`
  padding: 2rem;
  border: 2px solid darkgreen;
`;

interface Props {
  data: PostQuery;
}

const Post: React.FC<Props> = ({ data }) => {
  const { post } = data;
  if (!post) {
    return <div>No post is available</div>;
  }

  return (
    <Container>
      <Title>{post.title}</Title>
      <Info></Info>
      <Body>{post.body}</Body>
    </Container>
  );
};

export default Post;
