import React from "react";
import { PostQuery } from "../../generated/graphql";
import styled from "styled-components";
import _ from "lodash";

const PostDetails = styled.div`
  padding: 1rem 0 0 0;
  border-radius: 5px;
`;

interface Props {
  data: PostQuery;
}

const Post: React.FC<Props> = ({ data }) => {
  console.log(data, "=data");
  const { post } = data;
  if (!post) {
    return <div>No User is available</div>;
  }

  return (
    <div>
      Flight {post.id}:
      <PostDetails>{_.get(post, "author.username")}</PostDetails>
    </div>
  );
};

export default Post;
