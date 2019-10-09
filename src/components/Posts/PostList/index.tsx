import * as React from "react";
import { usePostListQuery } from "../../../generated/graphql";
import { PostList } from "./PostList";

const PostListContainer: React.FC = () => {
  const { data, error, loading } = usePostListQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <PostList data={data} />;
};

export default PostListContainer;
