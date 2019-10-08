import * as React from "react";
import { usePostListQuery } from "../../generated/graphql";
import { PostList, OwnProps } from "./PostList";

const PostListContainer: React.FC<OwnProps> = ({ handleIdChange }) => {
  const { data, error, loading } = usePostListQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <PostList data={data} handleIdChange={handleIdChange} />;
};

export default PostListContainer;
