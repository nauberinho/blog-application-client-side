import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PostListQuery } from "../../../generated/graphql";
import _ from "lodash";

interface Props {
  data: PostListQuery;
}

const PostItem = styled(Link)`
  padding: 2rem 5rem 2rem 0rem;
  border-bottom: 1px solid lightgray;
  cursor: pointer;
  display: block;
  text-decoration: none;
`;

const Title = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: black;
`;

export const PostList: React.FC<Props> = ({ data }) => (
  <>
    {data.allPosts &&
      data.allPosts.edges.map((post, i) => (
        <PostItem key={i} to={`/posts/post/${post!.node!.uuid}`}>
          <Title>{_.get(post, "node.title", "")}</Title>
        </PostItem>
      ))}
  </>
);
