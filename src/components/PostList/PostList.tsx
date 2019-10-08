import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PostListQuery } from "../../generated/graphql";
import _ from "lodash";

interface Props {
  data: PostListQuery;
}

const Container = styled.div`
  border: 1px solid green;
`;

export const PostList: React.FC<Props> = ({ data }) => (
  <Container>
    {data.allPosts &&
      data.allPosts.edges.map((post, i) => (
        <Link key={i} to={`/${post!.node!.uuid}`}>
          {_.get(post, "node.title", "")}
        </Link>
      ))}
  </Container>
);
