import * as React from "react";
import styled from "styled-components";
import { PostListQuery } from "../../generated/graphql";
import _ from "lodash";

export interface OwnProps {
  handleIdChange: (newId: string) => void;
}

interface Props extends OwnProps {
  data: PostListQuery;
}

const Container = styled.div`
  border: 1px solid green;
`;

export const PostList: React.FC<Props> = ({ data, handleIdChange }) => (
  <Container>
    <ol>
      {!!data.allPosts &&
        data.allPosts.edges.map((post, i) => (
          <li key={i} onClick={() => handleIdChange(_.get(post, "uuid", "0")!)}>
            {_.get(post, "body", "")}
          </li>
        ))}
    </ol>
  </Container>
);
