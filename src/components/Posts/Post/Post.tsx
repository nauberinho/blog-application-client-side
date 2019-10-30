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
  padding: 1rem 0 0 0;
  display: flex;
`;

const InfoItem = styled.div`
  margin-right: 1rem;
`;

const Body = styled.div``;

const BodyLine = styled.div`
  postion: absolute;
  top: 0;
  left: 0;
  border: 1.5px solid #37c870;
  width: 30%;
  margin: 1rem 0;
  border-radius: 5px;
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
      <Info>
        <InfoItem>Created at 11th of October 2019</InfoItem>
        <InfoItem>5 min read</InfoItem>
      </Info>
      <Body>
        <BodyLine />
        {post.body}
      </Body>
    </Container>
  );
};

export default Post;
